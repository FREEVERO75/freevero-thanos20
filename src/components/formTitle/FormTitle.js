import { Col, Row } from 'react-bootstrap';

export const FormTitle = ({ title }) => {
  return (
    <Row>
      <Col className='d-flex align-items-start'>
        <h3>{title}</h3>
      </Col>
    </Row>
  );
};
