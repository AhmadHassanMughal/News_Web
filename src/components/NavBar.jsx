import {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Navbar = ({
  category,
  setCategory,
  setDate,
  setSource,
  handleApplyFilter,
  sourceIds,
  setLoading,
}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState();
  const localCategory = localStorage.getItem("category");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    localStorage.setItem("category", newCategory);
    localStorage.setItem("categoryChanged", "true");

    if (newCategory == "trending") {
      navigate(`/`);
    } else {
      navigate(`/${newCategory}`);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // search button
  const handleSearchCategory = (e) => {
    e.preventDefault()
    setCategory(search);
    localStorage.setItem("categoryChanged", "true");
    setSearch("")

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // filter button open
  const [filterOpen, setFilterOpen] = useState();

  const handleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div>
      <div className="flex justify-between max-lg:hidden px-10 bg-white">
        <p className="font-[300] text-[1.7rem]">
          {" "}
          Latest{" "}
          <span className="text-[1.7rem] text-red-900 font-[600] tracking-[3px]">
            News
          </span>
        </p>
      </div>
      <div className="max-lg:hidden block">
        <nav className="bg-gray-200 pt-4 mt-4 pb-2 ">
          <ul className="flex gap-16 px-10 text-[1rem] font-[400] text-gray-700 ">
            <li
              onClick={() => {
                handleCategoryChange("trending");
              }}
              className={` cursor-pointer
            ${
              localCategory === "trending"
                ? "border-b-4 pb-2 border-red-800"
                : "hover:border-b-4 pb-2 border-red-300"
            }`}
            >
              <li>Home</li>
            </li>
            <li
              onClick={() => {
                handleCategoryChange("world");
              }}
              className={`cursor-pointer
            ${
              localCategory === "world"
                ? "border-b-4 pb-2 border-red-800"
                : "hover:border-b-4 pb-2 border-red-300"
            }`}
            >
              <li>World</li>
            </li>

            <li
              onClick={() => {
                handleCategoryChange("politics");
              }}
              className={`cursor-pointer
            ${
              localCategory === "politics"
                ? "border-b-4 pb-2 border-red-800"
                : "hover:border-b-4 pb-2 border-red-300"
            }`}
            >
              <li>Politics</li>
            </li>
            <li
              onClick={() => {
                handleCategoryChange("climate");
              }}
              className={`cursor-pointer
      ${
        localCategory === "climate"
          ? "border-b-4 pb-2 border-red-800"
          : "hover:border-b-4 pb-2 border-red-300"
      }`}
            >
              <li>Climate</li>
            </li>

            <li
              onClick={() => {
                handleCategoryChange("business"), navigate("/business");
              }}
              className={`cursor-pointer
      ${
        localCategory === "business"
          ? "border-b-4 pb-2 border-red-800"
          : "hover:border-b-4 pb-2 border-red-300"
      }`}
            >
              <li>Business</li>
            </li>
            <li
              onClick={() => {
                handleCategoryChange("israel-hamas-war");
              }}
              className={`cursor-pointer
      ${
        localCategory === "israel-hamas-war"
          ? "border-b-4 pb-2 border-red-800"
          : "hover:border-b-4 pb-2 border-red-300"
      }`}
            >
              <li>Israel-Hamas War</li>
            </li>
            <li
              onClick={() => {
                handleCategoryChange("science");
              }}
              className={`cursor-pointer
      ${
        localCategory === "science"
          ? "border-b-4 pb-2 border-red-800"
          : "hover:border-b-4 pb-2 border-red-300"
      }`}
            >
              <li>Science</li>
            </li>
            <li
              onClick={() => {
                handleCategoryChange("technology");
              }}
              className={`cursor-pointer
      ${
        localCategory === "technology"
          ? "border-b-4 pb-2 border-red-800"
          : "hover:border-b-4 pb-2 border-red-300"
      }`}
            >
              <li>Technology</li>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden max-lg:block">
        <AppBar position="static" className="!bg-white">
          <Toolbar>
            <p className="font-[300] text-[1.5rem] text-black ">
              {" "}
              Latest{" "}
              <span className="text-[1.7rem] text-red-900 font-[600] tracking-[3px]">
                News
              </span>
            </p>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: "auto" }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            {isMenuOpen && (
              <div className="">
                <Drawer
                  sx={{
                    width: "30%",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: "100%",
                      boxSizing: "border-box",
                    },
                  }}
                  variant="persistent"
                  anchor="left"
                  open={() => setIsMenuOpen(false)}
                >
                  <div className="!bg-white px-5 py-5 flex justify-between items-center">
                    <div onClick={toggleMenu} className="text-black ml-auto mr-3 ">
                      <RxCross2 size={20} />
                    </div>
                  </div>
                  <div className="flex flex-col bg-black min-h-full">
                    <li
                      className={`
                      ${
                        location.pathname === "/"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("trending");
                      }}
                    >
                      <p className="text-[0.9rem]">Home</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/world"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("world");
                      }}
                    >
                      <p className="text-[0.9rem]">World</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/politics"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("politics");
                      }}
                    >
                      <p className="text-[0.9rem]">Politics</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/climate"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("climate");
                      }}
                    >
                      <p className="text-[0.9rem]">Climate</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/business"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("business");
                      }}
                    >
                      <p className="text-[0.9rem]">Business</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/israel-hamas-war"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("israel-hamas-war");
                      }}
                    >
                      <p className="text-[0.9rem]">Israel-Hamas War</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/science"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("science");
                      }}
                    >
                      <p className="text-[0.9rem]">Science</p>
                    </li>
                    <li
                      className={`
                      ${
                        location.pathname === "/technology"
                          ? "border-b-[1px] !bg-red-300 !text-black"
                          : "hover:border-b-[1px] border-red-300"
                      } border-b-[1px] border-red-900 pl-6 h-[3.5rem] bg-black text-white font-[700] flex items-center`}
                      onClick={() => {
                        handleCategoryChange("technology");
                      }}
                    >
                      <p className="text-[0.9rem]">Technology</p>
                    </li>
                  </div>
                </Drawer>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>

      <form
        // onSubmit={handlSearchSubmit}
        className="flex justify-end gap-3 mt-3 w-[100%] "
      >
        <div className="max-md:w-[50%] relative bg-white !border-gray-500 hover:!border-black border-[1px] rounded-[15px] p-[3px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-[4%] w-[24rem] max-md:w-[100%] h-[1.5rem] max-md:h-[1.5rem] max-md:text-[0.9rem] ring-0 outline-none"
            placeholder="Search here"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-[0px]">
            <AiOutlineSearch className="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <button
              onClick={handleSearchCategory}
              className="max-sm:text-[.8rem]  px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Search
        </button>
      </form>
      <div className="flex justify-end gap-5 w-full mt-3">
        {filterOpen && (
          <div className="flex max-md:flex-col max-md:w-full gap-2 ">
            <div className="flex gap-2">
              <select
                name="sources"
                id="sources"
                onChange={(e) => setSource(e.target.value)}
                className="border-[1px] border-gray-400 pl-[2%] w-[16rem] max-md:w-[100%] h-[2rem] max-md:h-[1.5rem] max-md:text-[0.9rem] ring-0 outline-none rounded-[15px]"
              >
                {sourceIds?.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="border-[1px] px-3 border-gray-400 pl-[2%] w-[16rem] max-md:w-[100%] h-[2rem] max-md:h-[1.5rem] max-md:text-[0.9rem] ring-0 outline-none rounded-[15px]"
                placeholder="Enter Source"
              />
            </div>
            <button
              onClick={handleApplyFilter}
              className="max-md:w-[40%] max-md:m-auto max-sm:text-[.8rem]  px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Apply Filter
            </button>
          </div>
        )}
        <div className="border-2 border-gray-400 rounded-md cursor-pointer shadow-md flex justify-center items-center">
          <FilterAltIcon
            onClick={handleFilter}
            className="w-6 h-6 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
