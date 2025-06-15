import { Col, Row } from 'react-bootstrap';
import { Button } from '../../../components/button/Button';
import { faEye, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  ADD_VEHICLE_ROUTE,
  EDIT_VEHICLE_ROUTE,
  VIEW_VEHICLE_ROUTE,
} from '../../../constants/paths';
import { LIGHT_ORANGE, ORANGE } from '../../../constants/colors';

export const DashboardButtons = ({ hasVehicle }) => {
  const navigate = useNavigate();
  const dashboardButtons = [
    {
      label: 'Το όχημα μου',
      variant: 'primary',
      iconRight: faEye,
      onClick: () => navigate(VIEW_VEHICLE_ROUTE),
      disabled: !hasVehicle,
      style: { padding: '1.5rem', width: '16rem', fontWeight: 'bold' },
    },
    !hasVehicle
      ? {
          label: 'Προσθήκη οχήματος',
          variant: 'success',
          icon: faPlus,
          onClick: () => navigate(ADD_VEHICLE_ROUTE),
          style: { padding: '1.5rem', width: '16rem', fontWeight: 'bold' },
        }
      : {
          label: 'Επεξεργασία οχήματος',
          iconRight: faEdit,
          onClick: () => navigate(EDIT_VEHICLE_ROUTE),
          style: {
            padding: '1.5rem',
            width: '16rem',
            fontWeight: 'bold',
            background: ORANGE,
            borderColor: ORANGE,
            hoverColor: LIGHT_ORANGE,
          },
        },
  ];

  return (
    <Row className='w-100 justify-content-center gap-3'>
      {dashboardButtons.map((item, index) => (
        <Col key={index} xs='auto'>
          <Button {...item} />
        </Col>
      ))}
    </Row>
  );
};
