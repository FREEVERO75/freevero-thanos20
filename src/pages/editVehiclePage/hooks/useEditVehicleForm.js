import { useEffect, useState } from 'react';
import { useToast } from '../../../contexts/ToastContext';
import { useVehicle } from '../../../contexts/VehicleContext';
import { useNavigate } from 'react-router-dom';
import { isEmptyObject, validateFields } from '../../../utils/utils';
import { getVehicleService } from '../../../services/vehicleServices';

export const useEditVehicleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
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

  const getVehicle = () => {
    getVehicleService()
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  };

  const goToFinalViewPageAndValidateFields = () => {
    setEmptyFields([]);
    const emptyFields = validateFields(formData, fieldsForValidation);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      showError('Συμπληρώστε όλα τα πεδία!');
      return;
    } else {
      navigate('/final_vehicle', { state: { mode: 'edit' } });
    }
  };

  const clearForm = () => {
    clearVehicleData();
    setFormData({});
  };

  useEffect(() => {
    setVehicleData(formData);
  }, [formData]);

  useEffect(() => {
    getVehicle();
  }, []);

  useEffect(() => {
    if (isEmptyObject(formData) && !isEmptyObject(vehicleObj)) {
      setFormData(vehicleObj);
    }
  }, []);

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
