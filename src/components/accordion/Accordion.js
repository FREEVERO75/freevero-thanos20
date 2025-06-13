import { Accordion as BsAccordion } from 'react-bootstrap';

export const Accordion = ({ eventKey, header, body }) => {
  return (
    <BsAccordion defaultActiveKey='0'>
      <BsAccordion.Item eventKey={eventKey}>
        <BsAccordion.Header>
          <span className='fw-bold'>{header}</span>
        </BsAccordion.Header>
        <BsAccordion.Body>{body}</BsAccordion.Body>
      </BsAccordion.Item>
    </BsAccordion>
  );
};
