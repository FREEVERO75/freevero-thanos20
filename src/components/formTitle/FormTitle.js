import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { BLUE, PRIMARY_BLUE } from '../../constants/colors';

export const FormTitle = ({ icon, iconColor, title }) => {
  return (
    <Row className='pb-3'>
      <Col className='d-flex align-items-center justify-content-start gap-2'>
        <FontAwesomeIcon icon={icon} size='2xl' color={iconColor || BLUE} />
        <h4 className='blue'>{title}</h4>
      </Col>
    </Row>
  );
};
