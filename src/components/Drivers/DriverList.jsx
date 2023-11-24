import { useContext, useEffect } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

const DriverList = () => {
  const { driver } = useContext(DriverContext);

  const getDriversJSX = () => {
    const driverJSX = driver.map((_driver, i) => (
      <DriverItem
        key={i}
        id={_driver.id}
        name={_driver.name}
        age={_driver.age}
        nationality={_driver.nationality}
        image={_driver.image}
      />
    ));
    return driverJSX;
  };

  return (
    <section className="mb-3">
      <h3>Sjåfører</h3>
      <p>Antall: {driver.length}</p>
      <section className=" container row g-3">
        <div className="row">{getDriversJSX()}</div>
      </section>
    </section>
  );
};

export default DriverList;
