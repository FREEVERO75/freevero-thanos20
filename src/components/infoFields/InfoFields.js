import { Col, Row } from 'react-bootstrap';
import { ReadOnlyField } from '../readOnlyField/ReadOnlyFIeld';
import { FilePreview } from '../filePreview/FilePreview';

export const InfoFields = ({ readOnlyFields, formData }) => {
  return (
    <Row className='w-100'>
      {readOnlyFields?.map((item, index) => {
        const value = formData?.[item?.name];

        if (value === undefined || value === null || value === '') {
          return null;
        }

        const isSingleFile = value instanceof File;
        const isFileArray =
          Array.isArray(value) && value.length > 0 && value[0] instanceof File;

        const displayValue =
          item.options?.find(opt => String(opt.value) === String(value))
            ?.label || value;

        return (
          <Col key={index} xs={12} sm={item.sm || 6} className='pt-3'>
            {isSingleFile || isFileArray ? (
              <FilePreview
                label={item?.label}
                files={Array.isArray(value) ? value : [value]}
              />
            ) : (
              <ReadOnlyField label={item?.label} value={displayValue} />
            )}
          </Col>
        );
      })}
    </Row>
  );
};
