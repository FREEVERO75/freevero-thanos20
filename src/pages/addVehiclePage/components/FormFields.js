import { Col, Row } from 'react-bootstrap';
import { FieldRenderer } from '../../../components/fieldRenderer/FieldRenderer';
import { addVehicleFields } from './formConfig/addVehicleFields';

export const FormFields = () => {
  return (
    <Row className='w-100'>
      {addVehicleFields.map((field, index) => (
        <Col key={index} xs={12} sm={field.sm || 6}>
          <FieldRenderer field={field} />
        </Col>
      ))}
    </Row>
  );
};
