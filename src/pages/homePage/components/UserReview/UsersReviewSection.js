import { Col, Row } from 'react-bootstrap';
import { UserReviewItem } from './UserReviewItem';

export const UsersReviewSection = () => {
  const reviews = [
    { review: '"Πολύ εύκολη διαδικασία, τέλειο scooter στην Κέρκυρα!"' },
    { review: '"Έβγαλα 250€ σε 2 εβδομάδες μισθώνοντας τη μηχανή μου."' },
    {
      review:
        '"Το χρησιμοποίησα ως τουρίστας στην Αθήνα – εξαιρετική εμπειρία!"',
    },
  ];
  return (
    <div className='d-flex flex-column gap-3 mt-5 pt-5'>
      <Row>
        <Col xs={12} className='text-center'>
          <h2>Τι λένε οι χρήστες μας</h2>
        </Col>
      </Row>
      <Row>
        {reviews.map((item, index) => (
          <Col key={index} md={4} className='pt-3'>
            <UserReviewItem review={item.review} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
