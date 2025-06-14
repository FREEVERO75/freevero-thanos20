import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '../button/Button';
import { RED } from '../../constants/colors';

export const CustomFileInput = ({
  label,
  required,
  name,
  onChange,
  multiple = true,
  formData,
  accept,
  btnLabel,
}) => {
  const files = formData?.[name] || [];
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Form.Group className='mb-2'>
      <Form.Label>
        {label}
        {required && <span style={{ color: RED }}> *</span>}
      </Form.Label>

      <Form.Control
        ref={inputRef}
        type='file'
        accept={accept}
        name={name}
        onChange={onChange}
        multiple={multiple}
        style={{ display: 'none' }}
      />

      <Button label={btnLabel || 'Επιλογή αρχείου'} onClick={handleClick} />

      {files.length > 0 && (
        <span className='fw-bold'>
          Έχετε ανεβάσει {files.length}{' '}
          {files.length === 1 ? 'αρχείο' : 'αρχεία'}
        </span>
      )}
    </Form.Group>
  );
};
