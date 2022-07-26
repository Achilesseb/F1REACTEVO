import React from "react";
import "./driversCardLayout.styles.css";
import { useState } from "react";
import { useEffect } from "react";
const DriverCard = ({
  data,
  id,
  setDriverId,
  setDriverNewScore,
  handleClick,
}) => {
  const driverData = data;
  const driverRank = id + 1;
  const [border, setBorderColor] = useState(false);
  const teamNameColor = driverData.team.toLowerCase().replaceAll(" ", "");
  return (
    <div
      className="driverCard"
      onMouseEnter={() => setBorderColor(`var(--${teamNameColor}-color)`)}
      onMouseLeave={() => setBorderColor("var(--default-color)")}
      style={{ borderColor: border }}
    >
      <div className="driverInfo">
        <div className="rank">{driverRank}</div>
        <div className="points">
          {`${data.points}`} <span className="label">PTS</span>
        </div>
        <div className="buttons-container">
          <button
            className="button increase"
            onClick={() => handleClick(data.points, data.number, "increase")}
          ></button>
          <button
            className="button decrease"
            onClick={() => handleClick(data.points, data.number, "decrease")}
          ></button>
        </div>
      </div>
      <div className="driverInfo">
        <div className="name">
          <div
            className="color"
            style={{ backgroundColor: `var(--${teamNameColor}-color)` }}
          ></div>
          <span>{driverData.firstName}</span>
          <span>{driverData.lastName}</span>
        </div>
        <div className="nationality">{driverData.country}</div>
      </div>
      <div className="driverInfo team">{driverData.team}</div>
      <div className="driverLook">
        <img className="driverImage" src={driverData.image} />
        <div
          className="permanentNumber"
          style={{ color: `var(--${teamNameColor}-color)` }}
        >
          {driverData.number}
        </div>
      </div>
    </div>
  );
};
export default DriverCard;
