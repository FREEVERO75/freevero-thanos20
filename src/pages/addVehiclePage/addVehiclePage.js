import { MainLayout } from '../../styles/styles';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { useAddVehicleForm } from './hooks/useAddVehicleForm';
import { vehicleCards } from './components/vehicleCardConfig/VehicleCardConfig';
import { useNavigate } from 'react-router-dom';
import { FormFields } from '../../components/formFields/FormFields';

export const AddVehiclePage = () => {
  const {
    step,
    formData,
    handleChange,
    nextStep,
    prevStep,
    clearForm,
    goToFinalViewPageAndValidateFields,
    emptyFields,
  } = useAddVehicleForm();

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
      <PageTitle title='Προσθήκη Οχήματος' />
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
