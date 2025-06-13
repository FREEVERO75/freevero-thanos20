import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../../components/logo/Logo';
import { Button } from '../../../components/button/Button';
import main_image from '../../../assets/images/scooter.jpg';
import { LIGHT_GRAY } from '../../../constants/colors';

export const HeroSection = () => {
  const bookingBtnStyle = {
    width: '10rem',
    padding: '0.8rem',
  };

  const infoBtnStyle = {
    width: '12rem',
    padding: '0.8rem',
    border: `1px solid ${LIGHT_GRAY}`,
  };
  return (
    <Row>
      <Col sm={12} md={7}>
        <Logo />
        <strong className='lg-font-size'>
          Νοίκιασε μηχανάκι ή <br /> scooter <br /> μέσα σε 1 λεπτό!
        </strong>
        <br />
        <br />
        <span className='md-font-size gray'>
          Η Freevero φέρνει τουρίστες και επισκέπτες σε επαφή με διαθέσιμα
          <br /> δίκυκλα από ιδιώτες — με ευκολία, ασφάλεια και αξιοπιστία.
        </span>
        <div className='pt-4 d-flex align-items-center gap-3'>
          <Button label='Κάνε Κράτηση' style={bookingBtnStyle} />
          <Button
            variant='light'
            label='Δες πώς λειτουργεί'
            style={infoBtnStyle}
          />
        </div>
      </Col>
      <Col className='pt-4' sm={12} md={5}>
        <div className='main-image-wrapper'>
          <img className='main-image' src={main_image} alt='main_image' />
        </div>
      </Col>
    </Row>
  );
};
