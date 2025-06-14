import { Col, Row } from 'react-bootstrap';
import { FieldRenderer } from '../../../components/fieldRenderer/FieldRenderer';

export const FormFields = ({ fields }) => {
  return (
    <Row className='w-100'>
      {fields.map((field, index) => (
        <Col key={index} xs={12} sm={field.sm || 6} className='pt-3'>
          <FieldRenderer field={field} />
        </Col>
      ))}
    </Row>
  );
};
