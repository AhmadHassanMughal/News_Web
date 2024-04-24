import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Category from './pages/Category'

function App() {

  const [fetchData, setFetchData] = useState([]);
  const [category, setCategory] = useState('trending')
  const [testCategory, setTestCategory] = useState(category)
  console.log(category)
  console.log(fetchData)

  useEffect(() => {

      // Retrieve the flag indicating whether the category has changed
  const categoryChanged = localStorage.getItem("categoryChanged");

  // If the flag is true (indicating the category has changed), clear the randomData from local storage
  if (categoryChanged === "true") {
    localStorage.removeItem("randomData");
    // Reset the flag to false
    localStorage.setItem("categoryChanged", "false");
  }
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=edc2387a534843fba82179a1268a2e4e`
      )
      // .then((res) => console.log(res))
      .then((res) => {
        // console.log(res);
        setFetchData(res?.data?.articles);
      })
      .catch((error) => console.error(error));
  }, [category]);

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

  // Shuffle the fetchData array
  //   const shuffledData = shuffleArray(fetchData);
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
    }
    // Retrieve random data from local storage
    const storedRandomData = JSON.parse(localStorage.getItem("randomData"));

    if (storedRandomData) {
      setRandomMapData(storedRandomData);
    } else {
      // Update random data initially
      updateRandomMapData()
    }

    // Set interval to update random data every 15 minutes
    const intervalId = setInterval(() => {
      updateRandomData();
      updateRandomMapData();
    }, 15 * 60 * 1000); // 15 minutes in milliseconds

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [fetchData]);
  
  return (
    <BrowserRouter>
    <Navbar category={category} setCategory={setCategory} />
    <div className='h-full mb-10' >
      <Routes >
        {/* <Route path='/trending' element={<Home randomMapData={randomMapData} randomData={randomData} setCategory={setCategory} />} /> */}
        <Route path={`/${category}`} element={<Category randomMapData={randomMapData} randomData={randomData} setCategory={setCategory} />} />
      </Routes>
    </div>
    <Footer category={category} setCategory={setCategory}/>
    </BrowserRouter>
  )
}

export default App
