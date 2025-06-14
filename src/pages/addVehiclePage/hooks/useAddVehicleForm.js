import { useEffect, useState } from 'react';
import { ADD_VEHICLE_LOCALE_STORAGE_KEY } from '../../../constants/localeStorageKeys';

export const useAddVehicleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem(ADD_VEHICLE_LOCALE_STORAGE_KEY);
    return storedData
      ? JSON.parse(storedData)
      : {
          vehiclePlate: '',
          vehicleYear: '',
          motorcycleType: null,
          vehicleBrand: '',
          vehicleModel: '',
          vehicleKm: '',
          vehicleCc: '',
          vehicleHp: '',
          vehicleFuelType: null,
          vehicleTransmission: null,
          vehiclePhotos: [],
          vehicleLicence: null,
        };
  });

  const handleChange = event => {
    const { name, type, files, value } = event.target;

    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: Array.from(files),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
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
