import { useEffect, useState } from 'react';
import { convertToFormData, isEmptyObject } from '../../../utils/utils';
import { useVehicle } from '../../../contexts/VehicleContext';
import { useNavigate } from 'react-router-dom';
import {
  ADD_VEHICLE_ROUTE,
  EDIT_VEHICLE_ROUTE,
  VEHICLE_DASHBOARD_ROUTE,
  VIEW_VEHICLE_ROUTE,
} from '../../../constants/paths';
import {
  addNewVehicleService,
  deleteVehicleService,
  editVehicleService,
} from '../../../services/vehicleServices';
import { useToast } from '../../../contexts/ToastContext';

export const useFinalVehiclePageForm = () => {
  const [formData, setFormData] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { vehicleObj } = useVehicle();
  const { showSuccess, showError } = useToast();

  const navigate = useNavigate();

  // confirmation modal
  const openConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const deleteVehicle = () => {
    deleteVehicleService()
      .then(response => {
        showSuccess('Επιτυχής διαγραφή!');
        closeConfirmationModal();
        navigate(VEHICLE_DASHBOARD_ROUTE);
      })
      .catch(error => {
        console.log(error);
        showError();
        closeConfirmationModal();
      });
  };

  const goBackToAddVehiclePage = () => {
    navigate(ADD_VEHICLE_ROUTE);
  };

  const goBackToEditVehiclePage = () => {
    navigate(EDIT_VEHICLE_ROUTE);
  };

  const addNewVehicle = () => {
    const data = convertToFormData(formData);
    addNewVehicleService(data)
      .then(response => {
        console.log(response);
        showSuccess('Επιτυχής καταχώρηση οχήματος!');
        navigate(VIEW_VEHICLE_ROUTE);
      })
      .catch(error => {
        const status = error?.response?.status;
        const errorCode = error?.response?.data?.error_code;

        if (status === 409 && errorCode === 300) {
          showError('Το όχημα υπάρχει!');
        } else if (status === 409 && errorCode === 302) {
          showError('Έχετε ήδη καταχωρημένο όχημα!');
        } else {
          showError();
        }
      });
  };

  const editVehicle = () => {
    const data = convertToFormData(formData);
    editVehicleService(data)
      .then(response => {
        console.log(response);
        showSuccess('Επιτυχής επεξεργασία οχήματος!');
        navigate(VIEW_VEHICLE_ROUTE);
      })
      .catch(error => {
        const status = error?.response?.status;
        const errorCode = error?.response?.data?.error_code;

        if (status === 409 && errorCode === 300) {
          showError('Το όχημα υπάρχει!');
        } else if (status === 409 && errorCode === 302) {
          showError('Έχετε ήδη καταχωρημένο όχημα!');
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
    editVehicle,
    goBackToEditVehiclePage,
    showConfirmationModal,
    openConfirmationModal,
    closeConfirmationModal,
    deleteVehicle,
  };
};
