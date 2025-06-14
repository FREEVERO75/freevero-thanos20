import {
  CUSTOM_FILE_INPUT,
  INPUT_GROUP_TYPE,
  INPUT_TYPE,
  SELECT_TYPE,
} from '../../constants/types';
import { CustomFileInput } from '../customFileInput/CustomFileInput';
import { Input } from '../input/Input';
import { InputGroup } from '../inputGroup/InputGroup';
import { Select } from '../select/Select';

export const FieldRenderer = ({ field }) => {
  switch (field.fieldType) {
    case INPUT_TYPE:
      return <Input {...field} />;
    case INPUT_GROUP_TYPE:
      return <InputGroup {...field} />;
    case SELECT_TYPE:
      return <Select {...field} />;
    case CUSTOM_FILE_INPUT:
      return (
        <CustomFileInput
          {...field}
          accept={field?.accept}
          btnLabel={field?.btnLabel}
        />
      );
    default:
      return null;
  }
};
