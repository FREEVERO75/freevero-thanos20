import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../constants/paths';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout className='d-flex align-items-center justify-content-center'>
      <CardContainer padding='2rem'>
        <Logo />
        <Row className='w-100'>
          <Col xs={12}>
            <Input
              label='Όνομα χρήστη'
              required
              placeholder='Συμπληρώστε το όνομα χρήστη σας'
            />
          </Col>
        </Row>
        <Row className='w-100'>
          <Col xs={12}>
            <Input
              label='Κωδικός πρόσβασης'
              required
              placeholder='Συμπληρώστε τον κωδικό πρόσβασης'
            />
          </Col>
        </Row>
        <Row className='w-100 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6}>
            <Button label='Εγγραφή' icon={faRightToBracket} />
          </Col>
          <Col xs={12} md={6} className='text-center'>
            <span
              className='account-span'
              onClick={() => navigate(REGISTER_ROUTE)}
            >
              Δεν έχετε λογαριασμό;
            </span>
          </Col>
        </Row>
      </CardContainer>
    </MainLayout>
  );
};
