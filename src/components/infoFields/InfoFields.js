import { Col, Row } from 'react-bootstrap';
import { ReadOnlyField } from '../readOnlyField/ReadOnlyFIeld';
import { FilePreview } from '../filePreview/FilePreview';

export const InfoFields = ({ readOnlyFields, formData }) => {
  return (
    <Row className='w-100'>
      {readOnlyFields?.map((item, index) => {
        const value = formData?.[item?.name];
        let displayValue = value;

        if (value === undefined || value === null || value === '') {
          return null;
        }

        const isImageFile = name =>
          name.toLowerCase().match(/\.(jpg|jpeg|png)$/);

        const isPdfFile = name => name.toLowerCase().endsWith('.pdf');

        const isSingleFile = value instanceof File && isImageFile(value.name);

        const isFileArray =
          Array.isArray(value) &&
          value.length > 0 &&
          value[0] instanceof File &&
          isImageFile(value[0].name);

        const isServerFile =
          (Array.isArray(value) &&
            value.length > 0 &&
            typeof value[0] === 'string' &&
            isImageFile(value[0])) ||
          (typeof value === 'string' && isImageFile(value));

        const isPdf =
          (value instanceof File && isPdfFile(value.name)) ||
          (typeof value === 'string' && isPdfFile(value)) ||
          (Array.isArray(value) &&
            value.length > 0 &&
            ((value[0] instanceof File && isPdfFile(value[0].name)) ||
              (typeof value[0] === 'string' && isPdfFile(value[0]))));

        // Set label from options if applicable
        if (
          item.options &&
          !Array.isArray(value) &&
          typeof value !== 'object'
        ) {
          const option = item.options.find(
            opt => String(opt.value) === String(value)
          );
          displayValue = option ? option.label : value;
        }

        // Set name if File
        if (value instanceof File && !isImageFile(value.name)) {
          displayValue = value.name;
        }

        // Set display value for pdf array
        if (isPdf) {
          displayValue = Array.isArray(value)
            ? value.map(v => (v instanceof File ? v.name : v)).join(', ')
            : value instanceof File
              ? value.name
              : value;
        }

        const files = Array.isArray(value) ? value : [value];

        return (
          <Col key={index} xs={12} sm={item.sm || 6} className='pt-3'>
            {isPdf ? (
              <ReadOnlyField label={item?.label} value={displayValue} />
            ) : isSingleFile || isFileArray || isServerFile ? (
              <FilePreview
                label={item?.label}
                files={files}
                isFromServer={isServerFile}
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
