import { useEffect, useRef, useState } from "react";
import "./App.css";
import DriversCards from "./Drivers/DriversCard/driversCardContainer";
import DriverPodium from "./Drivers/DriversPodium/driversPodium";
import NavigationBar from "./NavigationBar/navigationBar";
import { mockData } from "./mockData";
import { fetchData } from "./utils";
function App() {
  const [driverList, setDriverList] = useState(mockData);
  const [filteredDriverList, setFilteredDriverList] = useState(driverList);
  const [teamList, setTeamList] = useState(null);
  const [driverListStatus, setDriverListStatus] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");
  const driverCardRef = useRef(null);
  useEffect(() => {
    fetchData().then((res) => setTeamList(res));
  }, []);
  console.log(teamList);
  const handleNavBarClick = (navBarArg) => {
    if (navBarArg === "toggleDriverList")
      setDriverListStatus(!driverListStatus);
  };
  useEffect(() => {
    if (searchMessage !== "") {
      setDriverListStatus(true);
      return setFilteredDriverList(
        driverList.filter((drivers) => {
          const driverFullName = `${
            drivers.firstName + "" + drivers.lastName
          }`.toUpperCase();

          return driverFullName.includes(searchMessage.trim(" ").toUpperCase());
        })
      );
    } else if (searchMessage === "") setFilteredDriverList(driverList);
  }, [searchMessage]);
  console.log(teamList);
  useEffect(() => {
    console.log(driverCardRef);
    driverCardRef.current &&
      driverCardRef.current.scrollIntoView({ behavior: "smooth" });
  }, [driverListStatus]);
  return (
    <div className="App">
      <NavigationBar
        handleNavBarClick={handleNavBarClick}
        searchMessage={searchMessage}
        setSearchMessage={setSearchMessage}
      />
      <div className="driverPodiumContent">
        <DriverPodium driverList={driverList} teamList={teamList} />
      </div>
      {driverListStatus === true ? (
        <div className="driverCardsContent" ref={driverCardRef}>
          <DriversCards
            driverList={filteredDriverList}
            setDriverList={setDriverList}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
