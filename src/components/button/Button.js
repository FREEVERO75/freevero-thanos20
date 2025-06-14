import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button as BootstrapButton } from 'react-bootstrap';

export const Button = ({
  label,
  style,
  iconLeft,
  iconRight,
  iconSize,
  ...props
}) => {
  const combinedStyle = { width: '15rem', ...style };
  return (
    <BootstrapButton
      className='d-flex align-items-center justify-content-center gap-2'
      style={combinedStyle}
      {...props}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} size={iconSize || '1x'} />}
      {label}
      {iconRight && (
        <FontAwesomeIcon icon={iconRight} size={iconSize || '1x'} />
      )}
    </BootstrapButton>
  );
};
