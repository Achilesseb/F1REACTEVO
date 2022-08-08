import { useEffect, useState } from "react";
import "./App.css";
import DriversCards from "./Drivers/DriversCard/driversCardContainer";
import DriverPodium from "./Drivers/DriversPodium/driversPodium";
import NavigationBar from "./NavigationBar/navigationBar";
import { mockData } from "./mockData";
import { fetchData } from "./utils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [driverList, setDriverList] = useState(mockData);
  const [filteredDriverList, setFilteredDriverList] = useState(driverList);
  const [teamList, setTeamList] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");
  const handleChangeDriverList = (driverToFind) => {
    const changedDriverList = driverList
      .slice(driverList.indexOf(driverToFind) + 1, driverList.length)
      .concat(driverList.slice(0, driverList.indexOf(driverToFind)))
      .concat(driverToFind);
    setDriverList(changedDriverList);
  };
  const handleChangeSearchMessage = (e) => {
    setSearchMessage(e.target.value);
    if (e.target.value !== "") {
      const driversToFind = driverList.filter((driver) =>
        `${driver.firstName + driver.lastName}`
          .toUpperCase()
          .includes(e.target.value.replaceAll(" ", "").toUpperCase())
      );
      return setFilteredDriverList(() => driversToFind);
    } else if (e.target.value === null || e.target.value === "")
      setFilteredDriverList(driverList);
  };
  useEffect(() => {
    fetchData().then((res) => setTeamList(res));
  }, []);
  return (
    <div className="App">
      <Router>
        <NavigationBar handleChangeSearchMessage={handleChangeSearchMessage} />
        <Routes>
          <Route path="/" element={<div>Salut</div>} />
          <Route
            path="/standings"
            element={
              <div className="driverPodiumContent">
                <DriverPodium driverList={driverList} teamList={teamList} />
              </div>
            }
          />
          <Route
            path="/drivers"
            element={
              <div className="driverCardsContent">
                <DriversCards
                  driverList={filteredDriverList}
                  searchMessage={searchMessage}
                  handleChangeDriverList={handleChangeDriverList}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
