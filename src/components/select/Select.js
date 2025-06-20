import { Form } from 'react-bootstrap';
import { RED } from '../../constants/colors';

export const Select = ({ options, label, required, ...props }) => {
  return (
    <Form.Group className='mb-2'>
      <Form.Label>
        {label}
        {required && <span style={{ color: RED }}> *</span>}
      </Form.Label>
      <Form.Select {...props}>
        <option value=''>Επιλέξτε</option>
        {options?.map((item, index) => (
          <option key={index} value={item?.value}>
            {item?.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
