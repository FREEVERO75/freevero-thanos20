import { Navbar } from 'react-bootstrap';
import { Logo } from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { CIEL } from '../../constants/colors';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      className='d-flex justify-content-between px-md-4'
      expand='lg'
      style={{ backgroundColor: CIEL, height: '13vh' }}
    >
      <div className='d-flex align-items-center justify-content-between w-100 px-md-4'>
        <Navbar.Brand className='brand'>
          <Logo height='10vh' />
        </Navbar.Brand>
        <div className='d-none d-lg-block'>
          <h2 className='text-white'>Freevero</h2>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center'>
          <h6 className='text-white mt-3'>
            {/* {authState?.name} {authState?.surname} */}
          </h6>
          <DropDownMenu size='2x' icon={faUser} />
        </div>
      </div>
    </Navbar>
  );
};
