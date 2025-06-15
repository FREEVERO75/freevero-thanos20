import { Col, Modal, Row } from 'react-bootstrap';
import { Button } from '../../components/button/Button';
import { isFieldEmpty, validateFields } from '../../utils/utils';
import { Input } from '../../components/input/Input';
import { useToast } from '../../contexts/ToastContext';
import { useEffect, useState } from 'react';
import {
  getUserByIdService,
  updateUserService,
} from '../../services/userService';

export const EditUserModal = ({
  show,
  handleClose,
  selectedUser,
  changeRefreshFlag,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    mobileNumber: '',
    address: '',
  });
  const [emptyFields, setEmptyFields] = useState([]);

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

  const handleSubmit = () => {
    setEmptyFields([]);
    const emptyFields = validateFields(formData, fieldsForValidation);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      showError('Συμπληρώστε όλα τα πεδία!');
      return;
    }

    updateUserService(selectedUser?.id, formData)
      .then(() => {
        showSuccess('Η επεξεργασία πραγματοπιήθηκε επιτυχώς!');
        handleClose();
        changeRefreshFlag();
      })
      .catch(err => {
        console.error(err);
        showError('Απέτυχε η επεξεργασία χρήστη.');
      });
  };

  useEffect(() => {
    if (show) {
      getUserByIdService(selectedUser?.id)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.log(error);
          showError();
        });
    }
  }, [show, selectedUser?.id]);

  return (
    <Modal
      size='lg'
      show={show}
      onHide={handleClose}
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
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          label='Κλείσιμο'
          variant='danger'
          style={{ width: '7rem' }}
          onClick={handleClose}
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
