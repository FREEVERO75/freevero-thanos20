import { Col, Row } from 'react-bootstrap';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Logo } from '../../components/logo/Logo';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {
  getUserDataService,
  updateUserDataService,
} from '../../services/userService';
import { useToast } from '../../contexts/ToastContext';
import { isFieldEmpty, validateFields } from '../../utils/utils';

export const AccountPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    mobileNumber: '',
    address: '',
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const fieldsForValidation = [
    'name',
    'surname',
    'email',
    'mobileNumber',
    'address',
  ];

  const { showSuccess, showError } = useToast();

  const handleInputChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const updateUserData = () => {
    setEmptyFields([]);
    const emptyFields = validateFields(formData, fieldsForValidation);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      showError('Συμπληρώστε όλα τα στοιχεία!');
      return;
    }

    updateUserDataService(formData)
      .then(response => {
        console.log(response);
        setRefreshFlag(prev => !prev);
        showSuccess('Επιτυχής αποθήκευση!');
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  };

  useEffect(() => {
    getUserDataService()
      .then(response => {
        setFormData(response?.data);
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  }, [refreshFlag]);

  return (
    <MainLayout className='d-flex justify-content-center'>
      <CardContainer
        height='50%'
        width='100%'
        borderTopLeftRadius='4rem'
        borderTopRightRadius='0.75rem'
        borderBottomLeftRadius='0.75rem'
        borderBottomRightRadius='4rem'
      >
        <Logo />
        <Row className='w-100'>
          <Col xs={12} md={4}>
            <Input
              label='Όνομα'
              name='name'
              value={formData?.name}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα σας'
              isInvalid={isFieldEmpty('name', emptyFields) && !formData.name}
            />
          </Col>
          <Col xs={12} md={4}>
            <Input
              label='Επώνυμο'
              name='surname'
              value={formData?.surname}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το επώνυμο σας'
              isInvalid={
                isFieldEmpty('surname', emptyFields) && !formData.surname
              }
            />
          </Col>
          <Col xs={12} md={4}>
            <Input
              label='E-mail'
              name='email'
              value={formData?.email}
              onChange={handleInputChange}
              disabled
              required
              placeholder='Συμπληρώστε το e-mail σας'
              isInvalid={isFieldEmpty('email', emptyFields) && !formData.email}
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12} md={4}>
            <Input
              label='Κινητό τηλέφωνο'
              name='mobileNumber'
              value={formData?.mobileNumber}
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
          <Col xs={12} md={4}>
            <Input
              label='Διεύθυνση'
              name='address'
              value={formData?.address}
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
          <Col sm={12}>
            <Button
              label='Αποθήκευση'
              variant='success'
              icon={faSave}
              onClick={updateUserData}
            />
          </Col>
        </Row>
      </CardContainer>
    </MainLayout>
  );
};
