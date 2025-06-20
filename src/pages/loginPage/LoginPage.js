import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { REGISTER_ROUTE, VEHICLE_DASHBOARD_ROUTE } from '../../constants/paths';
import { useState } from 'react';
import { validateFields } from '../../utils/utils';
import { loginService } from '../../services/userService';
import { useToast } from '../../contexts/ToastContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  REFRESH_TOKEN_LOCALE_STORAGE_KEY,
  TOKEN_LOCALE_STORAGE_KEY,
} from '../../constants/localeStorageKeys';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const fieldsForValidation = ['email', 'password'];
  const { showError } = useToast();
  const { setAuthState } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const login = () => {
    if (validateFields(formData, fieldsForValidation).length > 0) {
      showError('Συμπληρώστε όλα τα στοιχεία!');
      return;
    }
    loginService(formData)
      .then(response => {
        localStorage.setItem(TOKEN_LOCALE_STORAGE_KEY, response?.data?.token);
        localStorage.setItem(
          REFRESH_TOKEN_LOCALE_STORAGE_KEY,
          response?.data?.refreshToken
        );
        setAuthState(response?.data?.user);
        navigate(VEHICLE_DASHBOARD_ROUTE);
      })
      .catch(error => {
        console.log(error);
        showError('Λάθος στοιχεία!');
      });
  };

  return (
    <MainLayout className='d-flex align-items-center justify-content-center'>
      <CardContainer
        height='50%'
        padding='2rem'
        borderTopLeftRadius='4rem'
        borderTopRightRadius='0.75rem'
        borderBottomLeftRadius='0.75rem'
        borderBottomRightRadius='4rem'
      >
        <Logo />
        <Row className='w-100'>
          <Col xs={12}>
            <Input
              label='E-mail'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το e-mail σας'
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12}>
            <Input
              label='Κωδικός πρόσβασης'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε τον κωδικό πρόσβασης'
              type='password'
            />
          </Col>
        </Row>
        <Row className='w-100 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6}>
            <Button
              label='Σύνδεση'
              icon={faRightToBracket}
              onClick={login}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={12} md={6} className='text-center'>
            <span
              className='account-span'
              onClick={() => navigate(REGISTER_ROUTE)}
            >
              Δεν έχετε λογαριασμό;
            </span>
          </Col>
        </Row>
      </CardContainer>
    </MainLayout>
  );
};
