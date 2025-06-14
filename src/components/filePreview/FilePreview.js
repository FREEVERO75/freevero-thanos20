import { Image } from 'react-bootstrap';

export const FilePreview = ({ label, files }) => {
  if (!files || files.length === 0) return null;

  return (
    <div className='d-flex flex-column gap-1 pt-2'>
      <span className='fw-bold'>{label}:</span>
      <div className='d-flex flex-wrap gap-2'>
        {files.map((file, index) => {
          const isImage = file.type?.startsWith('image/');
          const url = URL.createObjectURL(file);

          return isImage ? (
            <Image
              key={index}
              src={url}
              alt={file.name}
              thumbnail
              width={200}
              onLoad={() => URL.revokeObjectURL(url)}
            />
          ) : (
            <p key={index}>{file.name}</p>
          );
        })}
      </div>
    </div>
  );
};
