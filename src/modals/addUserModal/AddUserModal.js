import { Col, Modal, Row } from 'react-bootstrap';
import { Input } from '../../components/input/Input';
import {
  isFieldEmpty,
  validateFields,
  validatePassword,
} from '../../utils/utils';
import { useState } from 'react';
import { Button } from '../../components/button/Button';
import { addUserService } from '../../services/userService';
import { useToast } from '../../contexts/ToastContext';

export const AddUserModal = ({ show, handleClose, changeRefreshFlag }) => {
  const initialState = {
    name: '',
    surname: '',
    email: '',
    username: '',
    mobileNumber: '',
    address: '',
    password: '',
    repeatPassword: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [emptyFields, setEmptyFields] = useState([]);
  const fieldsForValidation = [
    'name',
    'surname',
    'email',
    'username',
    'mobileNumber',
    'address',
    'password',
  ];
  const { showSuccess, showError } = useToast();

  const handleInputChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };

  const handleModalClose = () => {
    resetFormData();
    handleClose();
  };

  const handleSubmit = () => {
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
    addUserService(formData)
      .then(() => {
        showSuccess('Ο χρήστης προστέθηκε επιτυχώς!');
        handleModalClose();
        changeRefreshFlag();
      })
      .catch(err => {
        console.error(err);
        showError('Απέτυχε η προσθήκη χρήστη.');
      });
  };

  return (
    <Modal
      size='lg'
      show={show}
      onHide={handleModalClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Προσθήκη χρήστη</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='Όνομα'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα'
              isInvalid={isFieldEmpty('name', emptyFields) && !formData.name}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='Επώνυμο'
              name='surname'
              value={formData.surname}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το επώνυμο'
              isInvalid={
                isFieldEmpty('surname', emptyFields) && !formData.surname
              }
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='E-mail'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το e-mail'
              isInvalid={isFieldEmpty('email', emptyFields) && !formData.email}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='Όνομα χρήστη'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το όνομα χρήστη'
              isInvalid={
                isFieldEmpty('username', emptyFields) && !formData.username
              }
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='Κινητό τηλέφωνο'
              name='mobileNumber'
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε το κινητό'
              type='number'
              isInvalid={
                isFieldEmpty('mobileNumber', emptyFields) &&
                !formData.mobileNumber
              }
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Input
              label='Διεύθυνση'
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder='Συμπληρώστε τη διεύθυνση'
              isInvalid={
                isFieldEmpty('address', emptyFields) && !formData.address
              }
            />
          </Col>
          <Col xs={12} md={4} lg={4} xl={4}>
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
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          label='Κλείσιμο'
          variant='danger'
          style={{ width: '7rem' }}
          onClick={handleModalClose}
        />
        <Button
          label='Αποθήκευση'
          variant='success'
          style={{ width: '7rem' }}
          onClick={handleSubmit}
        />
      </Modal.Footer>
    </Modal>
  );
};
