import { Col, Row } from 'react-bootstrap';
import {
  faCircleCheck,
  faClipboardList,
  faEuroSign,
} from '@fortawesome/free-solid-svg-icons';
import { OwnerItem } from './OwnerItem';
import { CardContainer } from '../../../../styles/styles';

export const OwnerSection = () => {
  const ownerItems = [
    {
      icon: faClipboardList,
      description: 'Χωρίς χειροκίνητες διαδικασίες – όλα online.',
    },
    {
      icon: faEuroSign,
      description: 'Έσοδα χωρίς κόπο και σταθερή τιμολόγηση.',
    },
    {
      icon: faCircleCheck,
      description: 'Ασφαλιστική κάλυψη & έλεγχος οδηγού.',
    },
  ];
  return (
    <div className='w-100 pt-5 d-flex align-items-center justify-content-center'>
      <CardContainer
        disabledAlignItemsFlag='true'
        width='100%'
        padding='0.15rem'
        gap='2rem'
      >
        <Row>
          <Col xs={12}>
            <h2 className='text-center'>Έχεις scooter ή μηχανή;</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='text-center'>
            <span>
              Βάλε το όχημά σου στο Freevero και ξεκίνα να κερδίζεις χρήματα
              όταν δεν το χρησιμοποιείς.
            </span>
          </Col>
        </Row>
        <Row>
          {ownerItems.map((item, index) => (
            <Col key={index} md={4}>
              <OwnerItem icon={item.icon} description={item.description} />
            </Col>
          ))}
        </Row>
      </CardContainer>
    </div>
  );
};
