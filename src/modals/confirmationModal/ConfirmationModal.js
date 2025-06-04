import { Col, Modal, Row } from 'react-bootstrap';
import { Button } from '../../components/button/Button';

export const ConfirmationModal = ({
  show,
  handleClose,
  title,
  body,
  handleSave,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <span>{body}</span>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          label='Όχι'
          variant='danger'
          onClick={handleClose}
          style={{ width: '10rem' }}
        />
        <Button
          label='Ναι'
          variant='success'
          onClick={handleSave}
          style={{ width: '10rem' }}
        />
      </Modal.Footer>
    </Modal>
  );
};
