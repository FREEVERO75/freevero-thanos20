import { motion } from 'framer-motion';
import { CardContainer } from '../../styles/styles';
import { FormTitle } from '../formTitle/FormTitle';
import { Col, Row } from 'react-bootstrap';
import { Button } from '../button/Button';
import { FormFields } from '../../pages/addVehiclePage/components/FormFields';

const MotionCard = motion(CardContainer);

export const VehicleCard = ({
  icon,
  formTitle,
  fields,
  buttons,
  step,
  formData,
  onChange,
}) => {
  return (
    <MotionCard
      key={step}
      width='100%'
      disabledAlignItemsFlag={true}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <FormTitle icon={icon} title={formTitle} />
      <FormFields fields={fields} formData={formData} onChange={onChange} />
      <div className='d-flex justify-content-end flex-wrap gap-2 w-100 pt-3'>
        {buttons?.map((item, index) => (
          <div key={index}>
            <Button {...item} />
          </div>
        ))}
      </div>
    </MotionCard>
  );
};
