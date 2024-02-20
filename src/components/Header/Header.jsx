import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="text">
          <h1>Dashboard</h1>
        </div>
        <div className="search">
          <BiSearch id="icon1" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="search-input"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
