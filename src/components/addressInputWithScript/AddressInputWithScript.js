import { LoadScript } from '@react-google-maps/api';
import { AddressInput } from '../addressInput/AddressInput';

export const AddressInputWithScript = props => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      libraries={['places']}
    >
      <AddressInput {...props} />
    </LoadScript>
  );
};
