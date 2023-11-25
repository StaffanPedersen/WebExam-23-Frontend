import React, { useContext, useState, useEffect } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

const DriverList = ({ page }) => {
  const { driver, getDriverFromService } = useContext(DriverContext);
  const [filteredDriverList, setFilteredDriverList] = useState([]);

  useEffect(() => {
    setFilteredDriverList(driver);
  }, [driver]);

  const applyFilter = (name) => {
    if (name.trim() === "") {
      setFilteredDriverList(driver);
    } else {
      const filteredList = driver.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredDriverList(filteredList);
    }
  };

  const getDriversJSX = () => {
    const driverJSX = filteredDriverList.map((_driver, i) => (
      <DriverItem
        key={i}
        id={_driver.id}
        name={_driver.name}
        age={_driver.age}
        nationality={_driver.nationality}
        image={_driver.image}
        showId={page === "driveradminpage"}
      />
    ));
    return driverJSX;
  };

  return (
    <section className="mb-3">
      <h3 className="text-center">Sjåfører</h3>
      <input
        type="text"
        placeholder="Filter etter navn"
        onChange={(e) => applyFilter(e.target.value)}
      />
      <p>Antall: {filteredDriverList.length}</p>
      <section className=" container row g-3">
        <div className="row">{getDriversJSX()}</div>
      </section>
    </section>
  );
};

export default DriverList;
