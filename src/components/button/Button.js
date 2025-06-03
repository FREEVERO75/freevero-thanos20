import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button as BootstrapButton } from 'react-bootstrap';

export const Button = ({ label, style, icon, iconSize, ...props }) => {
  const combinedStyle = { width: '15rem', ...style };
  return (
    <BootstrapButton
      className='d-flex align-items-center justify-content-center gap-2'
      style={combinedStyle}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} size={iconSize || '1x'} />}
      {label}
    </BootstrapButton>
  );
};
