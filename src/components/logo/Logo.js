import logo from '../../assets/images/logo.png';

export const Logo = ({ style, height = '160px', width = '160px' }) => {
  return (
    <div className={style} style={{ height: height, width: width }}>
      <img
        className='logo'
        src={logo}
        alt='logo'
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};
