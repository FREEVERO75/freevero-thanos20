import { useEffect, useState } from 'react';
import { getVehicleService } from '../../../services/vehicleServices';

export const useVehicleDashboardForm = () => {
  const [hasVehicle, setHasVehicle] = useState(false);
  const getVehicle = () => {
    getVehicleService()
      .then(response => {
        if (response.data) {
          setHasVehicle(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return {
    hasVehicle,
  };
};
