import { useEffect, useState } from 'react';
import { ADD_VEHICLE_LOCALE_STORAGE_KEY } from '../../../constants/localeStorageKeys';

export const useAddVehicleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehiclePlate: '',
    vehicleYear: '',
    motorcycleType: '',
    vehicleBrand: '',
    vehicleModel: '',
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  useEffect(() => {
    localStorage.setItem(
      ADD_VEHICLE_LOCALE_STORAGE_KEY,
      JSON.stringify(formData)
    );
  }, [formData]);

  const clearForm = () => {
    localStorage.removeItem(ADD_VEHICLE_LOCALE_STORAGE_KEY);
    setFormData({});
  };

  return {
    step,
    formData,
    handleChange,
    nextStep,
    prevStep,
    clearForm,
  };
};
