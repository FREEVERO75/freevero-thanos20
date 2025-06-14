import { useEffect, useState } from 'react';
import { ADD_VEHICLE_LOCALE_STORAGE_KEY } from '../../../constants/localeStorageKeys';
import { useToast } from '../../../contexts/ToastContext';
import { validateFields } from '../../../utils/utils';

const defaultForm = {
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
  vehicleAddress: '',
};

export const useAddVehicleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem(ADD_VEHICLE_LOCALE_STORAGE_KEY);
    return storedData
      ? { ...defaultForm, ...JSON.parse(storedData) }
      : defaultForm;
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const { showError } = useToast();

  const fieldsForValidation = [
    'vehiclePlate',
    'vehicleYear',
    'vehicleBrand',
    'motorcycleType',
    'vehicleModel',
    'vehicleKm',
    'vehicleCc',
    'vehicleHp',
    'vehicleFuelType',
    'vehicleTransmission',
    'vehicleLicence',
    'vehicleAddress',
  ];

  const handleChange = (eventOrName, maybeValue) => {
    if (typeof eventOrName === 'object' && eventOrName.target) {
      const { name, type, files, value } = eventOrName.target;

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
    } else if (typeof eventOrName === 'string') {
      setFormData(prev => ({
        ...prev,
        [eventOrName]: maybeValue,
      }));
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const goToFinalViewPageAndValidateFields = () => {
    setEmptyFields([]);
    const emptyFields = validateFields(formData, fieldsForValidation);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      showError('Συμπληρώστε όλα τα πεδία!');
      return;
    }
  };

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
    goToFinalViewPageAndValidateFields,
    emptyFields,
  };
};
