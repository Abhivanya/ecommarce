import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { shopContext } from "./../context/shopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { setSearch, search, setShowSearch, showSearch } =
    useContext(shopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!showSearch) return null;

  return (
    visible && (
      <div className="border-t border-b bg-gray-50 text-center flex items-center  justify-center">
        <div className="flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <img className="w-4" src={assets.search_icon} alt="" />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </div>
    )
  );
};

export default SearchBar;
