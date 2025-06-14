import { createContext, useContext, useState } from 'react';

const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicleObj, setVehicleObj] = useState({});

  const setVehicleData = obj => {
    setVehicleObj(obj);
  };

  const clearVehicleData = () => {
    setVehicleObj({});
  };

  return (
    <VehicleContext.Provider
      value={{ setVehicleData, clearVehicleData, vehicleObj }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
