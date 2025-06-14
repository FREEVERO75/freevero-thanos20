import { useEffect, useState } from 'react';
import { isEmptyObject } from '../../../utils/utils';
import { useVehicle } from '../../../contexts/VehicleContext';
import { useNavigate } from 'react-router-dom';
import { ADD_VEHICLE_ROUTE } from '../../../constants/paths';

export const useFinalVehiclePageForm = () => {
  const [formData, setFormData] = useState({});
  const { vehicleObj } = useVehicle();

  const navigate = useNavigate();

  const goBackToAddVehiclePage = () => {
    navigate(ADD_VEHICLE_ROUTE);
  };

  useEffect(() => {
    if (isEmptyObject(formData) && !isEmptyObject(vehicleObj)) {
      setFormData(vehicleObj);
    }
  }, []);

  return {
    formData,
    goBackToAddVehiclePage,
  };
};
