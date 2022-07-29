import React from "react";
import "./driversPodium.styles.css";
import { DotLoader } from "react-spinners";
const DriverPodium = ({ driverList, teamList }) => {
  const driversOnPodiumArray = driverList
    .sort((a, b) => b.points - a.points)
    .filter((_, index, array) => index < 3);
  return driversOnPodiumArray.map((driver, index) => {
    return (
      <div
        className="podium container"
        style={{
          borderColor: `var(--${driver.team
            .toLowerCase()
            .replaceAll(" ", "")}-color)`,
        }}
      >
        <div className="driverRank">
          {Array.from({ length: index + 1 }, (_, i) => (
            <i
              className="rankPosition"
              key={i}
              style={{
                color: `var(--${driver.team
                  .toLowerCase()
                  .replaceAll(" ", "")}-color)`,
              }}
            ></i>
          ))}{" "}
        </div>
        <div className="teamImage"></div>

        <div className="podiumContainer look">
          {" "}
          <img className="podiumContainer image" src={driver.image} />
        </div>
        <div className="name">
          {`${driver.firstName + " " + driver.lastName}`}
        </div>
        <div className="driverContainer team">
          {teamList === null || teamList.length === 0 ? (
            <DotLoader size={50} />
          ) : (
            <img
              className="image"
              src={
                teamList.find((team) => team.name.includes(driver.team)).logo
              }
            ></img>
          )}
        </div>
      </div>
    );
  });
};
export default DriverPodium;
