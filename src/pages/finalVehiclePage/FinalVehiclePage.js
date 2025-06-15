import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { MainLayout } from '../../styles/styles';
import { InfoFields } from '../../components/infoFields/InfoFields';
import { useFinalVehiclePageForm } from './hooks/useFinalVehiclePageForm';
import { displayFields } from './components/formConfig/displayFields';
import { FormButtons } from './components/FormButtons';
import { useLocation } from 'react-router-dom';
import { ConfirmationModal } from '../../modals/confirmationModal/ConfirmationModal';

export const FinalVehiclePage = () => {
  const {
    formData,
    goBackToAddVehiclePage,
    goBackToEditVehiclePage,
    addNewVehicle,
    editVehicle,
    showConfirmationModal,
    openConfirmationModal,
    closeConfirmationModal,
    deleteVehicle,
  } = useFinalVehiclePageForm();
  const { state } = useLocation();
  const mode = state?.mode;
  const isEdit = mode === 'edit';

  return (
    <MainLayout>
      <PageTitle title='Προεπισκόπηση Οχήματος' />
      <VehicleCard
        icon={faEye}
        formTitle='Στοιχεία Οχήματος'
        content={
          <InfoFields readOnlyFields={displayFields} formData={formData} />
        }
        buttons={FormButtons({
          isEdit: isEdit,
          onEdit: isEdit ? goBackToEditVehiclePage : goBackToAddVehiclePage,
          onSave: isEdit ? editVehicle : addNewVehicle,
          openConfirmationModal: openConfirmationModal,
        })}
      />
      <ConfirmationModal
        handleClose={closeConfirmationModal}
        show={showConfirmationModal}
        title='Διαγραφή οχήματος'
        body='Είστε σίγουροι ότι θέλετε να διαγράψετε το όχημα σας;'
        handleSave={deleteVehicle}
      />
    </MainLayout>
  );
};
