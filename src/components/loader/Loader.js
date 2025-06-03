import { MoonLoader } from 'react-spinners';
import { BLUE } from '../../constants/colors';
import { MainLayout } from '../../styles/styles';

export const Loader = () => {
  return (
    <MainLayout
      className='d-flex flex-column align-items-center justify-content-center position-fixed z-3 top-0 start-0 end-0 bottom-0'
      style={{
        zIndex: 10000,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <MoonLoader color={BLUE} />
    </MainLayout>
  );
};
