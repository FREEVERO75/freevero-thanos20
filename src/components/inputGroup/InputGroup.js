import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup as BootstrapInputGroup, Form } from 'react-bootstrap';

export const InputGroup = ({ icon, ...props }) => {
  return (
    <BootstrapInputGroup className='mb-3'>
      <BootstrapInputGroup.Text
        style={{ width: '48px', justifyContent: 'center' }}
      >
        <FontAwesomeIcon icon={icon} />
      </BootstrapInputGroup.Text>
      <Form.Control {...props} />
    </BootstrapInputGroup>
  );
};
