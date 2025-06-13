import { Col, Row } from 'react-bootstrap';
import { Logo } from '../../components/logo/Logo';
import { CardContainer, MainLayout } from '../../styles/styles';
import { DashboardButtons } from './components/DashboardButtons';

export const VehicleDashboardPage = () => {
  return (
    <MainLayout className='d-flex justify-content-center'>
      <CardContainer
        width='100%'
        borderTopLeftRadius='4rem'
        borderTopRightRadius='0.75rem'
        borderBottomLeftRadius='0.75rem'
        borderBottomRightRadius='4rem'
        gap='4rem'
      >
        <Logo />
        <Row>
          <Col xs={12}>
            <span className='fw-bold gray md-font-size2 text-center'>
              Διαχειρίσου το όχημα σου εύκολα και γρήγορα
            </span>
          </Col>
        </Row>
        <DashboardButtons />
      </CardContainer>
    </MainLayout>
  );
};
