import { createContext, useState, useEffect } from "react";
import MediaService from "../services/MediaService";

export const DriverContext = createContext(null);

export const DriverProvider = ({ children }) => {
  const [driver, setdriver] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getDriverFromService();
    }, 2000);
    // setTimeout bare inkludert for å skape et lite tidsavbrudd før info fra databasen vises; kun for testens skyld
  }, []);

  const getDriverFromService = async () => {
    const driverFromService = await MediaService.getAll();
    setdriver(driverFromService);
  };

  const getById = async (id) => {
    const driverToUpdate = await MediaService.getById(id);
    return driverToUpdate;
  };

  const editDriver = async (driverToUpdate) => {
    await MediaService.putDriver(driverToUpdate);
    getDriverFromService(); // Denne oppdaterer series ved å hente fra databasen i Web APIet på nytt. Kanskje burde man heller bare oppdatere det ene objektet som er endret i SeriesContext.
  };

  return (
    <DriverContext.Provider value={{ driver, getById, editDriver }}>
      {children}
    </DriverContext.Provider>
  );
};
