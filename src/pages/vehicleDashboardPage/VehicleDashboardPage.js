import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { DashboardButtons } from './components/DashboardButtons';
import { TitleAndSubTitle } from './components/TitleAndSubTitle';
import { useVehicleDashboardForm } from './hooks/useVehicleDashboardForm';

export const VehicleDashboardPage = () => {
  const { hasVehicle } = useVehicleDashboardForm();
  return (
    <MainLayout className='d-flex justify-content-center'>
      <CardContainer
        width='100%'
        borderTopLeftRadius='4rem'
        borderTopRightRadius='0.75rem'
        borderBottomLeftRadius='0.75rem'
        borderBottomRightRadius='4rem'
        gap='2rem'
      >
        <Logo />
        <TitleAndSubTitle />
        <DashboardButtons hasVehicle={hasVehicle} />
      </CardContainer>
    </MainLayout>
  );
};
