import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/paths';
import { useState } from 'react';
import {
  isFieldEmpty,
  validateFields,
  validatePassword,
} from '../../utils/utils';
import { useToast } from '../../contexts/ToastContext';
import { registerService } from '../../services/userService';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    mobileNumber: '',
    address: '',
    password: '',
    repeatPassword: '',
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const fieldsForValidation = [
    'name',
    'surname',
    'email',
    'username',
    'mobileNumber',
    'address',
    'password',
    'repeatPassword',
  ];

  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();

  const handleInputChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const register = () => {
    setEmptyFields([]);
    const emptyFields = validateFields(formData, fieldsForValidation);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      showError('Συμπληρώστε όλα τα πεδία!');
      return;
    }
    if (!validatePassword(formData.password)) {
      showError('Ο κωδικός πρόσβασης δε τηρεί τις πρϋποθέσεις!');
      return;
    }
    if (formData.password !== formData.repeatPassword) {
      showError('Οι κωδικοί πρόσβασης δεν ταιριάζουν!');
      return;
    }

    registerService(formData)
      .then(response => {
        console.log(response);
        showSuccess('Επιτυχής εγγραφή!');
      })
      .catch(error => {
        console.log(error);
        showError('Κάποιο σφάλμα προέκυψε!');
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
        <Row className='w-100 pt-4'>
          <Col xs={12} md={6}>
            <Input
              label='Όνομα'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα σας'
              isInvalid={isFieldEmpty('name', emptyFields) && !formData.name}
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
              isInvalid={
                isFieldEmpty('surname', emptyFields) && !formData.surname
              }
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
              isInvalid={isFieldEmpty('email', emptyFields) && !formData.email}
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
              isInvalid={
                isFieldEmpty('username', emptyFields) && !formData.username
              }
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12} md={6}>
            <Input
              label='Κινητό τηλέφωνο'
              name='mobileNumber'
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το κινητό σας'
              type='number'
              isInvalid={
                isFieldEmpty('mobileNumber', emptyFields) &&
                !formData.mobileNumber
              }
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
              isInvalid={
                isFieldEmpty('address', emptyFields) && !formData.address
              }
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
              type='password'
              isInvalid={
                isFieldEmpty('password', emptyFields) && !formData.password
              }
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
              type='password'
              isInvalid={
                isFieldEmpty('repeatPassword', emptyFields) &&
                !formData.repeatPassword
              }
            />
          </Col>
        </Row>
        <Row className='w-100 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6}>
            <Button
              label='Εγγραφή'
              variant='success'
              icon={faUserPlus}
              onClick={register}
              style={{ width: '100%' }}
            />
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
