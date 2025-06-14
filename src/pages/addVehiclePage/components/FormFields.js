import { Col, Row } from 'react-bootstrap';
import { FieldRenderer } from '../../../components/fieldRenderer/FieldRenderer';

export const FormFields = ({ fields, formData, onChange }) => {
  return (
    <Row className='w-100'>
      {fields.map((field, index) => (
        <Col key={index} xs={12} sm={field.sm || 6} className='pt-3'>
          <FieldRenderer
            field={{
              ...field,
              value: formData[field.name] || '',
              formData,
              onChange,
            }}
          />
        </Col>
      ))}
    </Row>
  );
};
