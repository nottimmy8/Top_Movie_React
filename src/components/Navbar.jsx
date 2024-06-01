import React, { useState } from "react";
import navlistdata from "../data/navlistdata";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import NavListitems from "../pages/NavListitems";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [nav, setNav] = useState(false);

  return (
    <div className="w-full flex justify-between items-center py-3 px-6 bg-primary">
      {/* logo */}{" "}
      <Link to="/">
        <div className=" text-red-600 text-2xl font-bold cursor-pointer">
          Top-Movie
        </div>
      </Link>
      {/* navitems */}
      <div className="space-x-3 hidden text-sm md:text-sm  sm:flex">
        {navlistdata.map((nav) => (
          <NavListitems key={nav._id} nav={nav} />
        ))}
      </div>
      {/* Search Input */}
      <div className="bg-secondary rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="text-white" />
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-white"
          type="text"
          placeholder="Search movie"
        />
      </div>
      {/* right side */}
      <div className="flex items-center space-x-2">
        {/* profile */}
        {user?.email ? (
          <div>
            <div className=" flex">
              <Link to="/account">
                <button className="text-white pr-4 hover:text-red-600">
                  Account
                </button>
              </Link>{" "}
              <div className="relative group inline-block">
                <IoLogOutOutline
                  size={25}
                  onClick={handleLogout}
                  className="text-white  hover:text-red-600"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded py-1 px-2 mt-2">
                  logOut
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative group inline-block">
            <Link to="/login">
              {" "}
              <CgProfile size={25} className="text-white" />
            </Link>

            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded py-1 px-2 mt-2">
              Profile
            </div>
          </div>
        )}

        {/* Menu */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-white  sm:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* side drop menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-secondary z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-secondary z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute left-4 top-5 cursor-pointer text-white"
        />
        <h2 className="text-2xl absolute right-4 top-5 text-white ">
          Best <span className="font-bold">Movie</span>
        </h2>

        {/* navitems */}
        <div className="  block absolute top-[80px] ml-10 space-y-8 ">
          {navlistdata.map((nav) => (
            <NavListitems key={nav._id} nav={nav} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
