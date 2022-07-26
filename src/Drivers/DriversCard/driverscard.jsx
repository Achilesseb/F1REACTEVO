import React from "react";
import { mockData } from "../../mockData";
import DriverCard from "./driversCardLayout";
import { useState } from "react";

const DriversCards = () => {
  const [driverList, setDriverList] = useState(mockData);
  const handleClick = (points, id, direction) => {
    const driverToFind = driverList.find((el) => el.number === id);
    direction === "increase"
      ? (driverToFind.points = points + 10)
      : (driverToFind.points = points - 10);

    setDriverList(
      driverList
        .slice(driverList.indexOf(driverToFind) + 1, driverList.length)
        .concat(driverList.slice(0, driverList.indexOf(driverToFind)))
        .concat(driverToFind)
    );
  };
  return driverList
    .sort((a, b) => b.points - a.points)
    .map((data, index) => {
      return (
        <DriverCard
          data={data}
          id={index}
          handleClick={handleClick}
          key={data.number}
        />
      );
    });
};

export default DriversCards;
