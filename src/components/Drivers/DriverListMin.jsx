import { useContext, useEffect } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import DriverList from "./DriverList";

const DriverListMin = () => {
  const { driver } = useContext(DriverContext);

  const getDriverJSX = () => {
    const driverJSX = driver.map((_driver, i) => (
      <li key={i}>
        {_driver.name} ({_driver.id})
      </li>
    ));
    return driverJSX;
  };

  return (
    <section>
      <h3>Sjåfører </h3>
      <section>{getDriverJSX()}</section>
    </section>
  );
};

export default DriverListMin;
