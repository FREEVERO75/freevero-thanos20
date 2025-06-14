import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { MainLayout } from '../../styles/styles';
import { InfoFields } from '../../components/infoFields/InfoFields';
import { useFinalVehiclePageForm } from './hooks/useFinalVehiclePageForm';
import { displayFields } from './components/formConfig/displayFields';
import { FormButtons } from './components/FormButtons';

export const FinalVehiclePage = () => {
  const { formData, goBackToAddVehiclePage } = useFinalVehiclePageForm();

  return (
    <MainLayout>
      <PageTitle title='Προεπισκόπηση Οχήματος' />
      <VehicleCard
        icon={faEye}
        formTitle='Στοιχεία Οχήματος'
        content={
          <InfoFields readOnlyFields={displayFields} formData={formData} />
        }
        buttons={FormButtons({ onEdit: goBackToAddVehiclePage })}
      />
    </MainLayout>
  );
};
