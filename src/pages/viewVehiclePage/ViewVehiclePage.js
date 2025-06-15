import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { MainLayout } from '../../styles/styles';
import { useViewVehiclePageForm } from './hooks/useViewVehiclePageForm';
import { InfoFields } from '../../components/infoFields/InfoFields';
import { displayFields } from './components/formConfig/displayFields';

export const ViewVehiclePage = () => {
  const { formData } = useViewVehiclePageForm();
  return (
    <MainLayout>
      <PageTitle title='Προεπισκόπηση Οχήματος' />
      <VehicleCard
        icon={faEye}
        formTitle='Στοιχεία Οχήματος'
        content={
          <InfoFields readOnlyFields={displayFields} formData={formData} />
        }
      />
    </MainLayout>
  );
};
