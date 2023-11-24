import { createContext, useState, useEffect } from "react";
import DriverService from "../services/DriverService";

export const DriverContext = createContext(null);

export const DriverProvider = ({ children }) => {
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    getDriverFromService();
  }, []);

  const getDriverFromService = async () => {
    const driverFromService = await DriverService.getAll();
    setDriver(driverFromService);
  };

  const getById = async (id) => {
    try {
      const result = await DriverService.getById(id);
      return result;
    } catch (err) {
      console.error("Error fetching driver by ID:", err);
      return null;
    }
  };

  const editDriver = async (driverToUpdate) => {
    await DriverService.putDriver(driverToUpdate);
    getDriverFromService();
  };

  return (
    <DriverContext.Provider
      value={{
        driver,
        setDriver,
        getDriverFromService,
        getById,
        editDriver,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
