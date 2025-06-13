import { Col, Row } from 'react-bootstrap';
import { Button } from '../../../components/button/Button';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

export const DashboardButtons = () => {
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
      style: { padding: '1.5rem', fontWeight: 'bold' },
    },
  ];

  return (
    <Row className='w-100 justify-content-center gap-3'>
      {dashboardButtons.map((item, index) => (
        <Col key={index} xs='auto'>
          <Button
            label={item.label}
            variant={item.variant}
            style={item.style}
            icon={item.icon}
          />
        </Col>
      ))}
    </Row>
  );
};
