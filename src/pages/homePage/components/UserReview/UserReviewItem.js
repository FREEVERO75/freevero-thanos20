import { WHITE } from '../../../../constants/colors';

export const UserReviewItem = ({ review }) => {
  const style = {
    padding: '1.5rem',
    background: WHITE,
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={style}>
      <span className='font-italic sm-font-size'>{review}</span>
    </div>
  );
};
