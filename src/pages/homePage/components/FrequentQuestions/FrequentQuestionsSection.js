import { Col, Row } from 'react-bootstrap';
import { Accordion } from '../../../../components/accordion/Accordion';

export const FrequentQuestionsSection = () => {
  const questionsWithAnswers = [
    {
      header: 'Τι χρειάζομαι για να νοικιάσω scooter;',
      body: 'Απλώς ένα δίπλωμα οδήγησης, ταυτότητα και να έχεις εγγραφεί στην πλατφόρμα μας.',
    },
    {
      header: 'Είναι ασφαλής η ενοικίαση μέσω Freevero;',
      body: 'Ναι, όλοι οι οδηγοί και ιδιοκτήτες επαληθεύονται και τα οχήματα είναι ασφαλισμένα.',
    },
    {
      header: 'Μπορώ να ακυρώσω χωρίς χρέωση;',
      body: 'Η ακύρωση είναι δωρεάν έως 24 ώρες πριν την έναρξη της ενοικίασης.',
    },
    {
      header: 'Υπάρχουν εκπτώσεις ή προσφορές;',
      body: 'Ναι! Προσφέρουμε εκπτώσεις σε ενοικιάσεις άνω των 3 ημερών και σε επιλεγμένους προορισμούς.',
    },
  ];
  return (
    <div className='pt-5 mt-5 d-flex flex-column gap-5'>
      <Row>
        <Col xs={12} className='text-center'>
          <h2>Συχνές Ερωτήσεις</h2>
        </Col>
      </Row>
      <div>
        {questionsWithAnswers.map((item, index) => (
          <Accordion
            key={index}
            eventKey={index}
            header={item.header}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
};
