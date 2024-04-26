// import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiLogout, HiViewGrid } from "react-icons/hi";
// import { SESSION_ID, SESSION_LOGIN, SESSION_SEEKER, SESSION_TYPE } from '../Utils/Constant';
import { FaArrowRight } from "react-icons/fa";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, SwipeableDrawer } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { SESSION_ADMIN_LOGIN, SESSION_ADMIN_TYPE, SESSION_ADMIN_USER } from "../Utils/Constant";

const Navbar = ({
  category,
  setCategory,
  setDate,
  setSource,
  handleApplyFilter,
  sourceIds,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const localCategory = localStorage.getItem("category");
  console.log(localCategory);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    // Set the flag to true indicating the category has changed
    localStorage.setItem("category", newCategory);
    localStorage.setItem("categoryChanged", "true");
    if(newCategory == "trending"){
      navigate(`/`);
    } else{
      navigate(`/${newCategory}`);
    }
  };

  //   const [login, setLogin] = useState()
  //   const [seekerData, setSeekerData] = useState()

  // useEffect(() => {
  //   const isLogin = sessionStorage.getItem(SESSION_ADMIN_LOGIN)
  //   if (isLogin === "false") {
  //     navigate('/')
  //     // console.log(JSON.parse(sessionStorage.getItem(SESSION_SEEKER)))
  //   } else {
  //     ''
  //   }
  // }, []);

    const logout = () => {
      sessionStorage.setItem(SESSION_ADMIN_LOGIN, "false")
      sessionStorage.setItem(SESSION_ADMIN_TYPE, null)
      sessionStorage.setItem(SESSION_ADMIN_USER, null)
      // setLogin(false)
      navigate('/')

    }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [filterOpen, setFilterOpen] = useState();

  const handleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div>
      <div className="flex justify-between max-md:hidden px-10 bg-white">
        <p className="font-[300] text-[1.7rem]">
          {" "}
          Latest{" "}
          <span className="text-[1.7rem] text-red-900 font-[600] tracking-[3px]">
            News
          </span>
        </p>
        <div className='flex gap-4 text-[1.1rem]'>
        <button
            onClick={logout}
            className="px-4 py-[1px] text-[.9rem] font-[700] bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
          </div>
      </div>
      <div className="max-md:hidden block">
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
            <form
              // onSubmit={handlSearchSubmit}
              className="ml-auto max-lg:hidden "
            >
              <div className="relative bg-white !border-gray-300 hover:!border-gray-400 border-[2px] rounded-[15px] shadow-xl p-[3px] max-md:ml-0 mr-auto">
                <input
                  type="text"
                  // onChange={(e) => setSearch(e.target.value)}
                  className="pl-[30px] w-[24rem] max-md:w-[15rem] h-[1.5rem] max-md:h-[1.5rem] max-md:text-[0.7rem] ring-0 outline-none"
                  placeholder="Search here"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-[0px]">
                  <AiOutlineSearch className="w-6 h-6 text-gray-500" />
                </div>
              </div>
            </form>
          </ul>
        </nav>
      </div>
      <div className="hidden max-md:block">
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
                  <div className="!bg-[#230939] px-5 py-5 flex justify-between items-center">
                    <div className="flex gap-4">
                      <p
                        onClick={() => navigate("/login")}
                        className="py-2 px-4 border-[2px] border-red-800 bg-red-500 text-white text-[.8rem] rounded-[5px] cursor-pointer hover:bg-red-700 font-[600]  "
                      >
                        Sign Up
                      </p>
                      <p className="py-2 border-[2px] border-white px-4 rounded-[5px] text-[.8rem] text-white cursor-pointer hover:bg-red-200 font-[600] ">
                        Log in
                      </p>
                    </div>
                    <div onClick={toggleMenu} className="text-white">
                      <RxCross2 size={20} />
                    </div>
                  </div>
                  <div className="flex flex-col bg-[#3d2462] min-h-full">
                    <Link
                      to="/"
                      className={`
      ${
        location.pathname === "/"
          ? "border-b-[1px] !bg-[#8060b6]"
          : "hover:border-b-[1px] border-red-300"
      } border-b-[1px] border-red-800 pl-6 h-[3.5rem] bg-[#3d2462] text-white flex items-center`}
                    >
                      <p className="text-[0.9rem]">Home</p>
                    </Link>
                    <Link
                      to="/category"
                      className={`
      ${
        location.pathname === "/category"
          ? "border-b-[1px] !bg-[#8060b6]"
          : "hover:border-b-[1px] border-red-300"
      } border-b-[1px] border-red-800 pl-6 h-[3.5rem] bg-[#3d2462] text-white flex items-center`}
                    >
                      <p className="text-[0.9rem]">Category</p>
                    </Link>
                    <Link
                      to="/SearchPage"
                      className={`
      ${
        location.pathname === "/SearchPage"
          ? "border-b-[1px] !bg-[#8060b6]"
          : "hover:border-b-[1px] border-red-300"
      } border-b-[1px] border-red-800 pl-6 h-[3.5rem] bg-[#3d2462] text-white flex items-center`}
                    >
                      <p className="text-[0.9rem]">Find Job</p>
                    </Link>
                    <Link
                      to="/resume"
                      className={`
      ${
        location.pathname === "/resume"
          ? "border-b-[1px] !bg-[#8060b6]"
          : "hover:border-b-[1px] border-red-300"
      } border-b-[1px] border-red-800 pl-6 h-[3.5rem] bg-[#3d2462] text-white flex items-center`}
                    >
                      <p className="text-[0.9rem]">Resume Manage</p>
                    </Link>
                    <Link
                      to="/contact"
                      className={`
      ${
        location.pathname === "/contact"
          ? "border-b-[1px] !bg-[#8060b6]"
          : "hover:border-b-[1px] border-red-300"
      } border-b-[1px] border-red-800 pl-6 h-[3.5rem] bg-[#3d2462] text-white flex items-center`}
                    >
                      <p className="text-[0.9rem]">Contact Us</p>
                    </Link>
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
        <div className="relative md:hidden bg-white !border-gray-500 hover:!border-black border-[1px] rounded-[15px] p-[3px] max-md:ml-0">
          <input
            type="text"
            // onChange={(e) => setSearch(e.target.value)}
            className="pl-[4%] w-[24rem] max-md:w-[100%] h-[1.5rem] max-md:h-[1.5rem] max-md:text-[0.9rem] ring-0 outline-none"
            placeholder="Search here"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-[0px]">
            <AiOutlineSearch className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </form>
      <div className="flex justify-end gap-5 w-full mt-3">
        {filterOpen && (
          <div className="flex max-md:flex-col max-md:w-full gap-2 ">
            <div className="flex gap-2" >
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
