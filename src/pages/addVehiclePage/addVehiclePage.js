import { MainLayout } from '../../styles/styles';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { VehicleCard } from '../../components/vehicleCard/VehicleCard';
import { useAddVehicleForm } from './hooks/useAddVehicleForm';
import { vehicleCards } from './components/vehicleCardConfig/VehicleCardConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const AddVehiclePage = () => {
  const { step, formData, handleChange, nextStep, prevStep, clearForm } =
    useAddVehicleForm();

  const navigate = useNavigate();

  const currentStep = vehicleCards[step - 1];

  const stepButtons = currentStep?.buttons({
    navigate,
    clearForm,
    nextStep,
    prevStep,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <MainLayout>
      <PageTitle title='Προσθήκη Οχήματος' />
      <VehicleCard
        step={step}
        icon={currentStep?.icon}
        formTitle={currentStep?.title}
        fields={currentStep?.fields}
        buttons={stepButtons}
        formData={formData}
        onChange={handleChange}
      />
    </MainLayout>
  );
};
