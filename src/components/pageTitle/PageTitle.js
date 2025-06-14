import { Col, Row } from 'react-bootstrap';

export const PageTitle = ({ title }) => {
  return (
    <Row className='pb-4'>
      <Col xs={12} className='d-flex align-items-center justify-content-start'>
        <h2 className='blue-dark'>{title}</h2>
      </Col>
    </Row>
  );
};
