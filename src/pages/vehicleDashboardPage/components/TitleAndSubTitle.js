import { Col, Row } from 'react-bootstrap';

export const TitleAndSubTitle = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Row>
        <Col xs={12}>
          <h1 className='fw-bold blue-dark text-center'>ΔΙΑΧΕΙΡΙΣΗ ΟΧΗΜΑΤΟΣ</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span className='fw-bold blue-dark-light md-font-size2 text-center'>
            Διαχειρίσου το όχημα σου εύκολα και γρήγορα
          </span>
        </Col>
      </Row>
    </div>
  );
};
