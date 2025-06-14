import { Col, Row } from 'react-bootstrap';
import { Button } from '../../../components/button/Button';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ADD_VEHICLE_ROUTE } from '../../../constants/paths';

export const DashboardButtons = () => {
  const navigate = useNavigate();
  const dashboardButtons = [
    {
      label: 'Το όχημα μου',
      variant: 'primary',
      icon: faEye,
      style: { padding: '1.5rem', fontWeight: 'bold' },
    },
    {
      label: 'Προσθήκη οχήματος',
      variant: 'success',
      icon: faPlus,
      onClick: () => navigate(ADD_VEHICLE_ROUTE),
      style: { padding: '1.5rem', fontWeight: 'bold' },
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
