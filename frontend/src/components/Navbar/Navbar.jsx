import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-5 flex justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="w-[150px] md:w-[140px] sm:w-[120px]"
        />
      </Link>
      <ul className="hidden md:flex list-none gap-5 text-[#49557e] text-lg md:text-base sm:gap-4 sm:text-sm">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${
            menu === "home" ? "border-b-2 border-brown" : ""
          } cursor-pointer`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu" ? "border-b-2 border-brown" : ""
          } cursor-pointer`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("about us")}
          className={`${
            menu === "about us" ? "border-b-2 border-brown" : ""
          } cursor-pointer`}
        >
          about us
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={`${
            menu === "contact us" ? "border-b-2 border-brown" : ""
          } cursor-pointer`}
        >
          contact us
        </a>
      </ul>

      <div className="flex items-center gap-10 md:gap-7 sm:gap-5">
        <img src={assets.search_icon} alt="" className="w-6 sm:w-5" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="w-6 sm:w-5" />
          </Link>
          <div className="absolute top-[-8px] right-[-8px] w-[10px] h-[10px] bg-brown rounded-full"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[#49557e] text-base md:text-sm border border-brown py-2 px-8 md:px-6 md:py-1.5 sm:py-1 sm:px-5 rounded-full transition duration-300 hover:bg-brown hover:text-white"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
