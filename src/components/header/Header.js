import { Navbar } from 'react-bootstrap';
import { Logo } from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { BLUE_DARK, CIEL } from '../../constants/colors';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';
import {
  faMotorcycle,
  faRightFromBracket,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';
import {
  ACCOUNT_ROUTE,
  HOME_ROUTE,
  USERS_ROUTE,
  VEHICLE_DASHBOARD_ROUTE,
} from '../../constants/paths';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt';

export const Header = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const getActions = () => [
    {
      id: 1,
      name: 'Διαχείρηση οχήματος',
      icon: faMotorcycle,
      onClick: () => navigate(VEHICLE_DASHBOARD_ROUTE),
    },
    {
      id: 2,
      name: 'Ο λογαριασμός μου',
      icon: faUserAlt,
      onClick: () => navigate(ACCOUNT_ROUTE),
    },
    authState?.role === 'admin' && {
      id: 3,
      name: 'Χρήστες',
      icon: faUsers,
      onClick: () => navigate(USERS_ROUTE),
    },
    {
      id: 4,
      name: 'Αποσύνδεση',
      icon: faRightFromBracket,
      onClick: () => {
        logout();
      },
    },
  ];
  return (
    <Navbar
      className='d-flex justify-content-between px-md-4'
      expand='lg'
      style={{ backgroundColor: CIEL, height: '13vh' }}
    >
      <div className='d-flex align-items-center justify-content-between w-100 px-md-4'>
        <Navbar.Brand className='brand' onClick={() => navigate(HOME_ROUTE)}>
          <Logo height='10vh' style='mobile-logo' />
        </Navbar.Brand>
        <div className='d-none d-lg-block'>
          <h2 className='text-white'>Freevero</h2>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center'>
          <h6 className='text-white mt-3'>
            {/* {authState?.name} {authState?.surname} */}
          </h6>
          <DropDownMenu
            size='2x'
            icon={faUser}
            actions={getActions()}
            textColor={BLUE_DARK}
          />
        </div>
      </div>
    </Navbar>
  );
};
