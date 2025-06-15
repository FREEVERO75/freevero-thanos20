import { useEffect, useState } from 'react';
import { useToast } from '../../../contexts/ToastContext';
import { getVehicleService } from '../../../services/vehicleServices';

export const useViewVehiclePageForm = () => {
  const [formData, setFormData] = useState({});
  const { showSuccess, showError } = useToast();

  const getVehicle = () => {
    getVehicleService()
      .then(response => {
        console.log(response.data);
        setFormData(response.data);
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return {
    formData,
  };
};
