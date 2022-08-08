import React, { useState } from "react";
import "./navigationBar.style.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const NavigationBar = ({
  handleNavBarClick,
  handleChangeSearchMessage,
  searchMessage,
}) => {
  return (
    <div className="navigationBar">
      <Link
        to="/"
        className="navigationBar label"
        onClick={() => handleNavBarClick("returnTop")}
      >
        <img className="navigationBar logo" src={logo} />{" "}
      </Link>
      <Link
        to="drivers"
        className="navigationBar label"
        onClick={() => handleNavBarClick("toggleDriverList")}
      >
        Drivers
      </Link>
      <Link to="/teams" className="navigationBar label">
        Teams
      </Link>
      <Link to="/standings" className="navigationBar label">
        Standings
      </Link>
      <input
        className="navigationBar search"
        type="search"
        placeholder="Search for your driver!"
        value={searchMessage}
        onChange={(e) => handleChangeSearchMessage(e)}
      ></input>
    </div>
  );
};
export default NavigationBar;
