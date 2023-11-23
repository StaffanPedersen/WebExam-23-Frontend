import { useContext, useEffect } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

const DriverList = () => {
  // Får tak i series fra SeriesContext. series er en state som SeriesContext har.
  const { driver } = useContext(DriverContext);

  const getDriversJSX = () => {
    const driverJSX = driver.map((_driver, i) => (
      <DriverItem
        key={i}
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
      <h3>Våre sjåfører</h3>
      <p>Antall sjåfører: {driver.length}</p>
      <section className="row g-3">
        
        <div>{getDriversJSX()}</div>
      </section>
    </section>
  );
};

export default DriverList;
