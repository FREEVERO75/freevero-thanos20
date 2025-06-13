import { INPUT_GROUP_TYPE, INPUT_TYPE } from '../../constants/types';
import { Input } from '../input/Input';
import { InputGroup } from '../inputGroup/InputGroup';

export const FieldRenderer = ({ field }) => {
  switch (field.type) {
    case INPUT_TYPE:
      return <Input {...field} />;
    case INPUT_GROUP_TYPE:
      return <InputGroup {...field} />;
    default:
      return null;
  }
};
