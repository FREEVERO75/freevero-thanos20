import { Col, Row } from 'react-bootstrap';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Button } from '../../components/button/Button';
import {
  faBars,
  faEdit,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import {
  deleteUserService,
  getAllUserService,
} from '../../services/userService';
import { useToast } from '../../contexts/ToastContext';
import { width } from '@fortawesome/free-solid-svg-icons/faUserAlt';
import { BLUE_DARK, CIEL } from '../../constants/colors';
import { ConfirmationModal } from '../../modals/confirmationModal/ConfirmationModal';
import { DropDownMenu } from '../../components/dropDownMenu/DropDownMenu';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { showSuccess, showError } = useToast();

  // delete user
  const deleteUser = row => {
    setSelectedUser(row);
    setShowConfirmationModal(true);
  };

  // close modal
  const handleCloseConfirmationModal = () => {
    setSelectedUser(null);
    setShowConfirmationModal(false);
  };

  // table actions
  const getActions = row => [
    {
      id: 1,
      name: 'Επεξεργασία',
      icon: faEdit,
    },
    {
      id: 2,
      name: 'Διαγραφή',
      icon: faTrash,
      onClick: () => deleteUser(row),
    },
  ];

  const tableColumns = [
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Όνομα',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Επώνυμο',
      selector: row => row.surname,
      sortable: true,
    },
    {
      name: 'E-mail',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Κινητό τηλέφωνο',
      selector: row => row.mobileNumber,
      sortable: true,
    },
    {
      name: 'Διεύθυνση',
      selector: row => row.address,
      sortable: true,
    },
    {
      name: 'Ρόλος',
      selector: row => (row.role === 'admin' ? 'Διαχειριστής' : 'Χρήστης'),
      sortable: true,
    },
    {
      name: 'Ενέργειες',
      cell: row => (
        <div>
          <DropDownMenu
            icon={faBars}
            textColor={BLUE_DARK}
            iconColor={BLUE_DARK}
            actions={getActions(row)}
          />
        </div>
      ),
      allowOverflow: true,
      button: true,
      width: '163px',
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        borderRadius: '0.22rem',
        background: CIEL,
      },
    },
  };

  const confirmDeleteUser = async id => {
    deleteUserService(id)
      .then(response => {
        console.log(response);
        showSuccess('Ο χρήστης διαγράφηκε επιτυχώς!');
        setUsers(prev => prev.filter(user => user.id !== id)); // remove from UI
        setShowConfirmationModal(false);
        setSelectedUser(null);
      })
      .catch(error => {
        console.error(error);
        showError('Απέτυχε η διαγραφή του χρήστη.');
        setShowConfirmationModal(false);
        setSelectedUser(null);
      });
  };

  useEffect(() => {
    getAllUserService()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  }, []);
  return (
    <MainLayout className='d-flex justify-content-center'>
      <CardContainer
        height='50%'
        width='100%'
        padding='2rem'
        borderBottomLeftRadius='2rem'
        borderBottomRightRadius='2rem'
        style={{ overflow: 'hidden' }}
      >
        <Row className='align-items-center w-100'>
          <Col className='d-none d-lg-block' xs={6}>
            <h4>Χρήστες</h4>
          </Col>
          <Col className='d-flex align-items-end justify-content-end' xs={6}>
            <Button
              icon={faPlus}
              label='Προσθήκη'
              variant='success'
              style={{ width: '10rem' }}
            />
          </Col>
        </Row>
        <DataTable
          columns={tableColumns}
          data={users}
          pagination
          paginationPerPage={10}
          customStyles={customStyles}
        />
      </CardContainer>
      <ConfirmationModal
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        title='Διαγραφή χρήστη'
        body='Είστε σίγουροι ότι θέλετε να διαγράψετε το συγκεκριμένο χρήστη;'
        handleSave={() => confirmDeleteUser(selectedUser?.id)}
      />
    </MainLayout>
  );
};
