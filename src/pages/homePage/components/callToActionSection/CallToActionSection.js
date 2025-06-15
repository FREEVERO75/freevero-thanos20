import { Col, Row } from 'react-bootstrap';
import { CardContainer } from '../../../../styles/styles';
import { LIGHT_GRAY, PRIMARY_BLUE, WHITE } from '../../../../constants/colors';
import { Button } from '../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../../../constants/paths';

export const CallToActionSection = () => {
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
  const userBtnStyle = {
    color: PRIMARY_BLUE,
    padding: '1.4rem',
    fontWeight: 'bold',
    width: isMobile ? '100%' : '15rem',
  };

  const ownerBtnStyle = {
    background: 'transparent',
    border: `1px solid ${LIGHT_GRAY}`,
    padding: '1.4rem',
    fontWeight: 'bold',
    color: WHITE,
    width: isMobile ? '100%' : '15rem',
  };

  return (
    <div className='mt-5 pt-5'>
      <CardContainer width='100%' background={PRIMARY_BLUE}>
        <Row>
          <Col xs={12}>
            <h1 className='text-white text-center'>
              Ξεκίνα την εμπειρία Freevero σήμερα!
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className='text-white p-1 text-center'>
              Είτε είσαι επισκέπτης που θέλει να εξερευνήσει την πόλη, είτε
              ιδιοκτήτης που θέλει να κερδίσει χρήματα — είμαστε εδώ για σένα.
            </h4>
          </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center gap-2 gap-md-0'>
          <Col xs={12} sm={6}>
            <Button
              label='Δες διαθέσιμα Scooter'
              variant='light'
              style={userBtnStyle}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Button
              label='Εγγραφή ως Ιδιοκτήτης'
              style={ownerBtnStyle}
              onClick={() => navigate(REGISTER_ROUTE)}
            />
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};
