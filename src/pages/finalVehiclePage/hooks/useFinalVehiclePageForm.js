import { useEffect, useState } from 'react';
import { convertToFormData, isEmptyObject } from '../../../utils/utils';
import { useVehicle } from '../../../contexts/VehicleContext';
import { useNavigate } from 'react-router-dom';
import { ADD_VEHICLE_ROUTE } from '../../../constants/paths';
import { addNewVehicleService } from '../../../services/vehicleRoute';
import { useToast } from '../../../contexts/ToastContext';

export const useFinalVehiclePageForm = () => {
  const [formData, setFormData] = useState({});
  const { vehicleObj } = useVehicle();
  const { showSuccess, showError } = useToast();

  const navigate = useNavigate();

  const goBackToAddVehiclePage = () => {
    navigate(ADD_VEHICLE_ROUTE);
  };

  const addNewVehicle = () => {
    const data = convertToFormData(formData);
    addNewVehicleService(data)
      .then(response => {
        console.log(response);
        showSuccess('Επιτυχής καταχώρηση οχήματος!');
      })
      .catch(error => {
        const status = error?.response?.status;
        const errorCode = error?.response?.data?.error_code;

        if (status === 409 && errorCode === 300) {
          showError('Το όχημα υπάρχει!');
        } else {
          showError();
        }
      });
  };

  useEffect(() => {
    if (isEmptyObject(formData) && !isEmptyObject(vehicleObj)) {
      setFormData(vehicleObj);
    }
  }, []);

  return {
    formData,
    goBackToAddVehiclePage,
    addNewVehicle,
  };
};
