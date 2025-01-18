import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setNavStyle = ({ isActive }) => {
    return isActive
      ? "flex flex-col items-center gap-1 border-b-gray-400 border-b-2"
      : "flex flex-col items-center gap-1";
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"} className="w-36 text-2xl font-bold">
        E commarce
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm font-semibold text-gray-700">
        <NavLink to="/" className={setNavStyle}>
          Home
        </NavLink>
        <NavLink to="/collection" className={setNavStyle}>
          Collection
        </NavLink>
        <NavLink to="/about" className={setNavStyle}>
          About
        </NavLink>
        <NavLink to="/contact" className={setNavStyle}>
          Contact
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <NavLink to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart icon"
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute w-4 right-[-5px] bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            n
          </p>
        </NavLink>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu icon"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>
      {/* side bar menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isMenuOpen ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col bg-gray-300 h-full text-gray-600">
          <div
            className="flex items-center gap-2 p-3 cursor-pointer shadow"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="px-auto py-3 text-center text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className="px-auto py-3 text-center text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className="px-auto py-3 text-center text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contct"
            className="px-auto py-3 text-center text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
