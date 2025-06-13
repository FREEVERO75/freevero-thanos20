import { CardContainer, MainLayout } from '../../styles/styles';
import { FormFields } from './components/FormFields';
import { FormTitle } from '../../components/formTitle/FormTitle';

export const AddVehiclePage = () => {
  return (
    <MainLayout>
      <CardContainer width='100%' disabledAlignItemsFlag={true}>
        <FormTitle title='Προσθήκη οχήματος' />
        <FormFields />
      </CardContainer>
    </MainLayout>
  );
};
