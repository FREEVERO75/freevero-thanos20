import {
  INPUT_GROUP_TYPE,
  INPUT_TYPE,
  SELECT_TYPE,
} from '../../constants/types';
import { Input } from '../input/Input';
import { InputGroup } from '../inputGroup/InputGroup';
import { Select } from '../select/Select';

export const FieldRenderer = ({ field }) => {
  switch (field.type) {
    case INPUT_TYPE:
      return <Input {...field} />;
    case INPUT_GROUP_TYPE:
      return <InputGroup {...field} />;
    case SELECT_TYPE:
      return <Select {...field} />;
    default:
      return null;
  }
};
