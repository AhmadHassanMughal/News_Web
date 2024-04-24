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

const Navbar = ({ category, setCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryChange = (newCategory) => {
    console.log(newCategory);
    setCategory(newCategory);
    // Set the flag to true indicating the category has changed
    localStorage.setItem("categoryChanged", "true");
    navigate(`/${newCategory}`);
  };

  //   const [login, setLogin] = useState()
  //   const [seekerData, setSeekerData] = useState()

  //   useEffect(() => {
  //     const isLogin = sessionStorage.getItem(SESSION_LOGIN)
  //     if (isLogin === "true") {
  //       setLogin(true)
  //       setSeekerData(JSON.parse(sessionStorage.getItem(SESSION_SEEKER)));
  //       // console.log(JSON.parse(sessionStorage.getItem(SESSION_SEEKER)))
  //     } else {
  //       setLogin(false)
  //     }
  //   }, []);

  //   const logout = () => {
  //     sessionStorage.setItem(SESSION_LOGIN, "false")
  //     sessionStorage.setItem(SESSION_ID, null)
  //     sessionStorage.setItem(SESSION_TYPE, null)
  //     sessionStorage.setItem(SESSION_SEEKER, null)
  //     setLogin(false)

  //   }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        {/* <div className='ml-auto mr-4 '>
            <Dropdown arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img="./assets/profile.png" rounded />}
              className='w-50 p-4 rounded-xl'>
              <Dropdown.Header>
                <span className="block text-sm">
                  Cheema
                </span>
                <span className="block truncate text-sm font-medium">
                  Cheema@gmail.com             </span>
              </Dropdown.Header>
              <Link to='/profileInfo' className='flex py-2'>
                <div className='ml-2 mr-4 mt-[4px]'>
                  <HiViewGrid />
                </div>
                Profile
              </Link>

              <Dropdown.Divider />
              <div className='flex py-2 cursor-pointer'>
                <div className='ml-2 mr-4 mt-[4px]'>
                  <HiLogout />
                </div>
                Sign out
              </div>
            </Dropdown>
          </div> */}
        {/* <div className='flex gap-4 text-[1.1rem]'>
            <p onClick={() => navigate('/login')} className='border-2 px-4 pt-[6px] bg-red-500 text-white text-[.9rem] rounded-[5px] cursor-pointer hover:bg-red-700 font-[600]  '>Sign Up</p>
            <p className='border-[2px] border-gray-400 px-4 rounded-[5px] text-[.9rem] pt-[6px] text-red-800  cursor-pointer hover:bg-red-200 font-[600] '>Log in</p>
          </div> */}
        {/* {login ?
          <div className='ml-auto mr-4 '>
            <Dropdown arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img="./assets/profile.png" rounded />}
              className='w-50 p-4 rounded-xl'>
              <Dropdown.Header>
                <span className="block text-sm">
                  {seekerData?.name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {seekerData?.email}              </span>
              </Dropdown.Header>
              <Link to='/profileInfo' className='flex py-2'>
                <div className='ml-2 mr-4 mt-[4px]'>
                  <HiViewGrid />
                </div>
                Profile
              </Link>

              <Dropdown.Divider />
              <div className='flex py-2 cursor-pointer' onClick={() => logout()}>
                <div className='ml-2 mr-4 mt-[4px]'>
                  <HiLogout />
                </div>
                Sign out
              </div>
            </Dropdown>
          </div>
          :
          <div className='flex gap-4 text-[1.1rem]'>
            <p onClick={() => navigate('/login')} className='border-2 px-4 pt-[6px] bg-red-500 text-white text-[.9rem] rounded-[5px] cursor-pointer hover:bg-red-700 font-[600]  '>Sign Up</p>
            <p className='border-[2px] border-gray-400 px-4 rounded-[5px] text-[.9rem] pt-[6px] text-red-800  cursor-pointer hover:bg-red-200 font-[600] '>Log in</p>
          </div>
        } */}
      </div>
      <div className="max-md:hidden block">
        <nav className="bg-gray-200 border-b-[3px] border-black pt-4 mt-4 pb-2 ">
          <ul className="flex gap-16 px-10 text-[1rem] font-[400] text-gray-700 ">
            <li
              onClick={() => {
                handleCategoryChange("trending");
              }}
              className={` cursor-pointer
            ${
              category === "trending"
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
              category === "politics"
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
        category === "climate"
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
        category === "business"
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
              <div className="relative bg-white !border-gray-500 hover:!border-black border-[1px] rounded-lg p-[3px] max-md:ml-0 mr-auto">
                <input
                  type="text"
                  // onChange={(e) => setSearch(e.target.value)}
                  className="pl-[30px] w-[24rem] max-md:w-[15rem] h-[2rem] max-md:h-[1.5rem] max-md:text-[0.7rem] ring-0 outline-none"
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
            <p className="text-[1.2rem] text-blue-900 ml-auto">
              {" "}
              Jobss.com.pk{" "}
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
        className="ml-auto lg:hidden mt-3 w-[50%] max-sm:w-[70%] "
      >
        <div className="relative bg-white !border-gray-500 hover:!border-black border-[1px] rounded-lg p-[3px] max-md:ml-0 mr-auto">
          <input
            type="text"
            // onChange={(e) => setSearch(e.target.value)}
            className="pl-[4%] w-[24rem] max-md:w-[100%] h-[2rem] max-md:h-[1.5rem] max-md:text-[0.9rem] ring-0 outline-none"
            placeholder="Search here"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-[0px]">
            <AiOutlineSearch className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
