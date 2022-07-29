import React, { useState } from "react";
import "./navigationBar.style.css";
import logo from "./logo.png";

const NavigationBar = ({
  handleNavBarClick,
  setSearchMessage,
  searchMessage,
}) => {
  return (
    <div className="navigationBar">
      <div
        className="navigationBar label"
        onClick={() => handleNavBarClick("returnTop")}
      >
        <img className="navigationBar logo" src={logo} />{" "}
      </div>
      <div
        className="navigationBar label"
        onClick={() => handleNavBarClick("toggleDriverList")}
      >
        Drivers
      </div>
      <div className="navigationBar label">Teams</div>
      <div className="navigationBar label">Standings</div>
      <input
        className="navigationBar search"
        type="search"
        placeholder="Search for your driver!"
        value={searchMessage}
        onChange={(e) => setSearchMessage(e.target.value)}
      ></input>
    </div>
  );
};
export default NavigationBar;
