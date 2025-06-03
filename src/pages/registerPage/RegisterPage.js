import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/paths';
import { useState } from 'react';
import { validateFields, validatePassword } from '../../utils/utils';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    mobNumber: '',
    address: '',
    password: '',
    repeatPassword: '',
  });

  const fieldsForValidation = [
    'name',
    'surname',
    'email',
    'username',
    'mobNumber',
    'address',
    'password',
    'repeatPassword',
  ];

  const navigate = useNavigate();

  const handleInputChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const register = () => {
    if (validateFields(formData, fieldsForValidation).length > 0) {
      return;
    }
    if (!validatePassword(formData.password)) {
      return;
    }
  };

  return (
    <MainLayout className='d-flex align-items-center justify-content-center'>
      <CardContainer padding='2rem'>
        <Logo />
        <Row className='w-100 pt-4'>
          <Col xs={12} md={6}>
            <Input
              label='Όνομα'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα σας'
            />
          </Col>
          <Col xs={12} md={6}>
            <Input
              label='Επώνυμο'
              name='surname'
              value={formData.surname}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το επώνυμο σας'
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12} md={6}>
            <Input
              label='E-mail'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το e-mail σας'
            />
          </Col>
          <Col xs={12} md={6}>
            <Input
              label='Όνομα χρήστη'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα χρήστη σας'
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12} md={6}>
            <Input
              label='Κινητό τηλέφωνο'
              name='mobNumber'
              value={formData.mobNumber}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το κινητό σας'
              type='number'
            />
          </Col>
          <Col xs={12} md={6}>
            <Input
              label='Διεύθυνση'
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε τη διεύθυνση σας'
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12} md={6}>
            <Input
              label='Κωδικός πρόσβασης'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε τον κωδικό πρόσβασης'
            />
          </Col>
          <Col xs={12} md={6}>
            <Input
              label='Επανάληψη κωδικού πρόσβασης'
              name='repeatPassword'
              value={formData.repeatPassword}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε τον κωδικό πρόσβασης'
            />
          </Col>
        </Row>
        <Row className='w-100 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6}>
            <Button label='Εγγραφή' variant='success' icon={faUserPlus} />
          </Col>
          <Col xs={12} md={6} className='text-end'>
            <span
              className='account-span'
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Έχετε λογαριασμό;
            </span>
          </Col>
        </Row>
      </CardContainer>
    </MainLayout>
  );
};
