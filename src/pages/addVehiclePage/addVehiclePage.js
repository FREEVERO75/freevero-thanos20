import { MainLayout } from '../../styles/styles';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { FormFields } from './components/FormFields';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { useAddVehicleForm } from './hooks/useAddVehicleForm';
import { vehicleCards } from './components/vehicleCardConfig/VehicleCardConfig';

export const AddVehiclePage = () => {
  const { step, formData, handleChange, nextStep, prevStep, clearForm } =
    useAddVehicleForm();

  const currentStep = vehicleCards[step - 1];

  const stepButtons = currentStep?.buttons({
    nextStep,
    prevStep,
  });

  return (
    <MainLayout>
      <PageTitle title='Προσθήκη Οχήματος' />
      <VehicleCard
        step={step}
        icon={currentStep?.icon}
        formTitle={currentStep?.title}
        fields={currentStep?.fields}
        buttons={stepButtons}
      />
    </MainLayout>
  );
};
