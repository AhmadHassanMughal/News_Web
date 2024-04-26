import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./pages/Category";
import { CircularProgress } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);
  const [category, setCategory] = useState(localStorage.getItem("category") || "trending");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [filterData, setFilterData] = useState({
    source: "",
    date: "",
  });

// fetching data
  useEffect(() => {
    const categoryChanged = localStorage.getItem("categoryChanged");
    if (categoryChanged === "true") {
      localStorage.setItem("randomData", "false");
      localStorage.setItem("categoryChanged", "false");
    }
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=${filterData?.source}&q=${category}&from=${filterData?.date}&apiKey=f6fb46c33c8043268509c00eadec128d`
      )
      .then((res) => {
        // console.log(res);
        setFetchData(res?.data?.articles);
        setLoading(false)
      })
      .catch((error) => console.error(error));
  }, [category, filterData?.date, filterData?.source]);

// for random data suffle function  
  const [randomData, setRandomData] = useState(null);
  const [randomMapData, setRandomMapData] = useState(null);
  // Shuffle function to randomize the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // update and store data on the localstorage
  useEffect(() => {
    const updateRandomData = () => {
      const randomIndex = Math.floor(Math.random() * fetchData.length);
      const randomObject = fetchData[randomIndex];
      setRandomData(randomObject);
      localStorage.setItem("randomIndex", randomIndex);
    };

    // Retrieve random index from local storage
    const storedRandomIndex = localStorage.getItem("randomIndex");
    if (storedRandomIndex) {
      const randomIndex = parseInt(storedRandomIndex, 10);
      const randomObject = fetchData[randomIndex];
      setRandomData(randomObject);
    } else {
      updateRandomData();
    }

    const updateRandomMapData = () => {
      const shuffledData = shuffleArray(fetchData);
      // const randomData = shuffledData.slice(0, 3);
      setRandomMapData(shuffledData);
      localStorage.setItem("randomData", JSON.stringify(shuffledData));
    };
    // Retrieve random data from local storage
    const storedRandomData = JSON.parse(localStorage.getItem("randomData"));

    if (
      storedRandomData &&
      storedRandomData.length != 0 &&
      storedRandomData != false
    ) {
      console.log("good");
      setRandomMapData(storedRandomData);
    } else {
      // Update random data initially
      updateRandomMapData();
    }

    // Set interval to update random data every 15 minutes
    const intervalId = setInterval(() => {
      updateRandomData();
      updateRandomMapData();
    }, 15 * 60 * 1000); // 15 minutes in milliseconds

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [fetchData]);

  // source ids for filtering 
  const sourceIds = [
    ...new Set(
      fetchData
        .map((article) => article.source.id)
        ?.filter(
          (sourceId) =>
            sourceId !== null && sourceId !== undefined && sourceId !== ""
        )
    ),
  ];

  // apply filter button
  const handleApplyFilter = (e) => {
    e.preventDefault();
    setFilterData((prev) => ({ ...prev, source: source, date: date }));
    localStorage.setItem("categoryChanged", "true");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <BrowserRouter>
      <Navbar
        category={category}
        setCategory={setCategory}
        setDate={setDate}
        setSource={setSource}
        handleApplyFilter={handleApplyFilter}
        sourceIds={sourceIds}
        setLoading={setLoading}
      />
      <div className="h-full mb-10">
        {loading ? 
        <center>
        {" "}
        <div className="flex justify-center items-center h-screen">
        <CircularProgress color="secondary" />
        </div>
      </center>
      :
        <Routes>
          {category == "trending" ? (
            <Route
              path="/"
              element={
                <Home
                  randomMapData={randomMapData}
                  randomData={randomData}
                  setCategory={setCategory}
                />
              }
            />
          ) : (
            <Route
              path={`/${category == "treding" ? "" : category}`}
              element={
                <Category
                  randomMapData={randomMapData}
                  randomData={randomData}
                  setCategory={setCategory}
                />
              }
            />
          )}
          <Route path="*" element={<Navigate to={`/${category == "trending" ? '' : category }`} />} />
        </Routes>
      }
      </div>
      <Footer category={category} setCategory={setCategory} />
    </BrowserRouter>
  );
}

export default App;
