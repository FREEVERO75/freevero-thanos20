import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BLUE } from '../../../constants/colors';

export const OwnerItem = ({ icon, description }) => {
  return (
    <div className='d-flex align-items-center justify-content-center gap-2'>
      <FontAwesomeIcon icon={icon} size='2xl' color={BLUE} />
      <span className='sm-font-size'>{description} </span>
    </div>
  );
};
