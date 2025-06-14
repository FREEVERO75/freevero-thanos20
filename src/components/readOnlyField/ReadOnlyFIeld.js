export const ReadOnlyField = ({ label, value }) => {
  return (
    <div className='d-flex align-items-center justify-content-start gap-1'>
      <span className='fw-bold'>{label}</span>
      <span>:</span>
      <span className='gray'>{value}</span>
    </div>
  );
};
