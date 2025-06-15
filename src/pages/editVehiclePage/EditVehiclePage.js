import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { MainLayout } from '../../styles/styles';
import { useEditVehicleForm } from './hooks/useEditVehicleForm';
import { vehicleCards } from '../../constants/vehicleCards/vehicleCardsConfig';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { FormFields } from '../../components/formFields/FormFields';

export const EditVehiclePage = () => {
  const {
    step,
    formData,
    handleChange,
    nextStep,
    prevStep,
    clearForm,
    goToFinalViewPageAndValidateFields,
    emptyFields,
  } = useEditVehicleForm();

  const navigate = useNavigate();

  const currentStep = vehicleCards[step - 1];

  const stepButtons = currentStep?.buttons({
    navigate,
    clearForm,
    nextStep,
    prevStep,
    goToFinalViewPageAndValidateFields,
  });

  return (
    <MainLayout>
      <PageTitle title='Επξεργασία Οχήματος' />
      <VehicleCard
        step={step}
        icon={currentStep?.icon}
        formTitle={currentStep?.title}
        content={
          <FormFields
            fields={currentStep?.fields}
            formData={formData}
            onChange={handleChange}
            emptyFields={emptyFields}
          />
        }
        buttons={stepButtons}
      />
    </MainLayout>
  );
};
