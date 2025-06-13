import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BLUE } from '../../../../constants/colors';

export const HowItWorksItem = ({ icon, title, description }) => {
  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon icon={icon} size='2xl' color={BLUE} />
      </div>
      <h6>{title}</h6>
      <span className='sm-font-size'>{description}</span>
    </React.Fragment>
  );
};
