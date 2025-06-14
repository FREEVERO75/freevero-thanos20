import { Form } from 'react-bootstrap';
import { RED } from '../../constants/colors';

export const Input = ({ label, required, onChange, ...props }) => {
  return (
    <Form.Group className='mb-2'>
      <Form.Label>
        {label}
        {required && <span style={{ color: RED }}> *</span>}
      </Form.Label>
      <Form.Control
        {...props}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </Form.Group>
  );
};
