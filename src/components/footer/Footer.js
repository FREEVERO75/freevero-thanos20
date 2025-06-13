import { Col, Row } from 'react-bootstrap';
import { GRAY_SECOND } from '../../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
  return (
    <footer
      style={{ background: GRAY_SECOND }}
      className='d-flex align-items-center justify-content-center py-5 p-5 mt-5 w-100'
    >
      <div className='container d-flex flex-column gap-5'>
        <Row>
          <Col
            xs={12}
            sm={4}
            className='d-flex flex-column align-items-start gray'
          >
            <h1>Freevero</h1>
            <span className='md-font-size gray'>
              Powered by Car Help Europe
            </span>
          </Col>
          <Col
            xs={12}
            sm={4}
            className='d-flex flex-column align-items-center justify-content-center'
          >
            <div className='d-flex flex-column align-items-start gap-3'>
              <span className='md-font-size2 gray fw-500'>Επικοινωνία</span>
              <span className='md-font-size2 gray fw-500'>Όροι Χρήσης</span>
              <span className='md-font-size2 gray fw-500'>Help Pages</span>
              <span className='md-font-size2 gray fw-500'>Γίνε Πάροχος</span>
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            className='d-flex align-items-center justify-content-center gap-3'
          >
            <span className='gray'>
              <FontAwesomeIcon icon={faFacebookF} className='md-font-size3' />
            </span>
            <span className='md-font-size2 gray'>
              <FontAwesomeIcon icon={faInstagram} className='md-font-size3' />
            </span>
            <span className='md-font-size2 gray'>
              <FontAwesomeIcon icon={faYoutube} className='md-font-size3' />
            </span>
            <span className='md-font-size2 gray'>
              <FontAwesomeIcon icon={faXTwitter} className='md-font-size3' />
            </span>
          </Col>
        </Row>
        <Row>
          <Col
            className='d-flex align-items-center justify-content-center'
            xs={12}
          >
            <span className='md-font-size gray'>
              © 2025 Freevero. Με την υποστήριξη της Car Help Europe.
            </span>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
