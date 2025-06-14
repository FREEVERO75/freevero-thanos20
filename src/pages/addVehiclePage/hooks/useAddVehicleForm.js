import { useEffect, useState } from 'react';
import { useToast } from '../../../contexts/ToastContext';
import { isEmptyObject, validateFields } from '../../../utils/utils';
import { useVehicle } from '../../../contexts/VehicleContext';
import { useNavigate } from 'react-router-dom';
import { FINAL_VEHICLE_ROUTE } from '../../../constants/paths';

export const useAddVehicleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const { showError } = useToast();
  const { setVehicleData, clearVehicleData, vehicleObj } = useVehicle();

  const navigate = useNavigate();

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
    } else {
      navigate(FINAL_VEHICLE_ROUTE);
    }
  };

  useEffect(() => {
    setVehicleData(formData);
  }, [formData]);

  useEffect(() => {
    if (isEmptyObject(formData) && !isEmptyObject(vehicleObj)) {
      setFormData(vehicleObj);
    }
  }, []);

  const clearForm = () => {
    clearVehicleData();
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
