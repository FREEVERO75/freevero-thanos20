import { Form } from 'react-bootstrap';
import { RED } from '../../constants/colors';

export const Input = ({
  label,
  required,
  uppercase,
  onChange,
  value,
  name,
  onlyNumeric,
  ...props
}) => {
  const handleChange = e => {
    if (name === 'vehiclePlate') {
      let inputValue = e.target.value.toUpperCase();
      inputValue = inputValue.replace(/[^A-ZΑ-Ω0-9]/g, '');

      let letters = inputValue.slice(0, 3).replace(/[^A-ZΑ-Ω]/g, '');
      let numbers = inputValue
        .slice(3)
        .replace(/[^0-9]/g, '')
        .slice(0, 4);

      let formatted = letters;
      if (numbers.length > 0) {
        formatted += '-' + numbers;
      }
      onChange({ target: { name, value: formatted } });
    } else if (uppercase) {
      onChange({ target: { name, value: e.target.value.toUpperCase() } });
    } else if (onlyNumeric) {
      onChange({ target: { name, value: e.target.value.replace(/\D/g, '') } });
    } else {
      onChange({ target: { name, value: e.target.value } });
    }
  };
  return (
    <Form.Group className='mb-2'>
      <Form.Label>
        {label}
        {required && <span style={{ color: RED }}> *</span>}
      </Form.Label>
      <Form.Control
        {...props}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
};
