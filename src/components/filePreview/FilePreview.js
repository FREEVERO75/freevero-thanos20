import { Image } from 'react-bootstrap';

export const FilePreview = ({ label, files, isFromServer = false }) => {
  if (!files || files.length === 0) return null;

  return (
    <div className='d-flex flex-column gap-1 pt-2'>
      <span className='fw-bold'>{label}:</span>
      <div className='d-flex flex-wrap gap-2'>
        {files.map((file, index) => {
          const src = isFromServer
            ? `${process.env.REACT_APP_BASE_URL}/uploads/${file}`
            : URL.createObjectURL(file);

          const alt = typeof file === 'string' ? file : file.name;

          return (
            <Image
              key={index}
              src={src}
              alt={alt}
              thumbnail
              width={150}
              onLoad={() => !isFromServer && URL.revokeObjectURL(src)}
            />
          );
        })}
      </div>
    </div>
  );
};
