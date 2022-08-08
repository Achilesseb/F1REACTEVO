import React from "react";
import DriverCard from "./driversCardLayout";

const DriversCards = ({ driverList, handleChangeDriverList }) => {
  const handleChangeDriverPoints = (points, id, direction) => {
    const driverToFind = driverList.find((el) => el.number === id);
    direction === "increase"
      ? (driverToFind.points = points + 10)
      : (driverToFind.points = points - 10);
    handleChangeDriverList(driverToFind);
  };
  return driverList
    .sort((a, b) => b.points - a.points)
    .map((data, index) => {
      return (
        <DriverCard
          driverData={data}
          driverId={index}
          handleChangeDriverPoints={handleChangeDriverPoints}
          key={data.number}
        />
      );
    });
};

export default DriversCards;
