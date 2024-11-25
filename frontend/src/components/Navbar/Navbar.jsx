import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-5 flex justify-between items-center">
      <img src={assets.logo} alt="Logo" className="w-[150px]" />

      <ul className="flex gap-5 text-[#49557e] text-lg list-none">
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer pb-1 ${
            menu === "home" ? "border-b-2 border-brown" : ""
          }`}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer pb-1 ${
            menu === "menu" ? "border-b-2 border-brown" : ""
          }`}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("about us")}
          className={`cursor-pointer pb-1 ${
            menu === "about us" ? "border-b-2 border-brown" : ""
          }`}
        >
          about us
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={`cursor-pointer pb-1 ${
            menu === "contact us" ? "border-b-2 border-brown" : ""
          }`}
        >
          contact us
        </li>
      </ul>

      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="relative">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="absolute top-[-8px] right-[-8px] w-[10px] h-[10px] bg-brown rounded-full"></div>
        </div>
        <button className="bg-transparent text-[#49557e] border border-brown py-2 px-6 rounded-full transition duration-300 hover:bg-brown hover:text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
