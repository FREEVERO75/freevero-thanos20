import { Col, Row } from 'react-bootstrap';
import { MainLayout } from '../../styles/styles';
import main_image from '../../assets/images/pexels-catiamatos-1045535.jpg';
import { Button } from '../../components/button/Button';
import {
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

export const HomePage = () => {
  return (
    <MainLayout>
      <Row>
        <Col className='pt-4' md={7}>
          <strong className='lg-font-size'>
            Έχεις scooter ή μηχανάκι που κάθεται;
          </strong>
          <br />
          <span className='lg-font-size'>Ώρα να σου αποφέρει εισόδημα.</span>
          <br />
          <strong className='lg-font-size'>
            Δήλωσέ το στο Freevero και κέρδισε χρήματα με ασφάλεια!
          </strong>
          <br />
          <span className='lg-font-size'>
            Συγκεντρώνουμε ιδιοκτήτες για τη νέα πλατφόρμα ανταλλαγής που
            επιτρέπει τη βραχυχρόνια ενοικίαση σκούτερ και μοτοποδηλάτων.
          </span>
          <div className='pt-3 d-flex align-items-center gap-3'>
            <Button
              variant='success'
              icon={faUserPlus}
              label='Κάνε εγγραφή τώρα!'
            />
            <Button
              variant='secondary'
              icon={faRightToBracket}
              label='Σύνδεση'
            />
          </div>
        </Col>
        <Col md={5}>
          <div className='main-image-wrapper'>
            <img className='main-image' src={main_image} alt='main_image' />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='pt-4' md={12}>
          <span className='lg-font-size'>
            Πώς δουλεύει το Freevero; «Όπως το Airbnb άλλαξε ριζικά τον τρόπο
            που νοικιάζονται τα σπίτια, έτσι και το Freevero φέρνει την επόμενη
            επανάσταση: στις ενοικιάσεις δίκυκλων από ιδιώτες σε όποιον το
            χρειάζεται, με ασφάλεια και νομιμότητα.»
          </span>
        </Col>
      </Row>
    </MainLayout>
  );
};
