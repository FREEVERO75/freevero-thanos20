import { Col, Row } from 'react-bootstrap';
import { CardContainer } from '../../../styles/styles';
import { HowItWorksItem } from './HowItWorksItem';
import {
  faCalendarCheck,
  faKey,
  faMagnifyingGlassLocation,
} from '@fortawesome/free-solid-svg-icons';

export const HowItWorksSection = () => {
  const howItWorksItems = [
    {
      icon: faMagnifyingGlassLocation,
      title: 'Βρες όχημα κοντά σου',
      description: 'Δες scooter ή μηχανές διαθέσιμα στην περιοχή σου.',
    },
    {
      icon: faCalendarCheck,
      title: 'Κάνε κράτηση online',
      description: 'Εύκολη κράτηση με λίγα μόνο κλικ.',
    },
    {
      icon: faKey,
      title: 'Παραλαβή & απόλαυσε τη βόλτα',
      description: 'Παραλαβή από σημείο ή κατόπιν συνεννόησης.',
    },
  ];

  return (
    <div className='w-100 pt-5 d-flex align-items-center justify-content-center'>
      <CardContainer
        disabledAlignItemsFlag='true'
        width='100%'
        padding='0.15rem'
      >
        <Row>
          <Col xs={12}>
            <h2 className='text-center'>Πως λειτουργεί για τουρίστες</h2>
          </Col>
        </Row>
        <Row className='p-2'>
          {howItWorksItems.map((item, index) => (
            <Col
              key={index}
              md={4}
              className='d-flex align-items-center justify-content-center flex-column gap-1'
            >
              <HowItWorksItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </CardContainer>
    </div>
  );
};
