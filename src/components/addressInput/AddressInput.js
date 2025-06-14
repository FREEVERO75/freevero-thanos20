import { useState, useRef, useEffect } from 'react';
import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { Modal, Form } from 'react-bootstrap';
import { Button } from '../button/Button';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 37.9838,
  lng: 23.7275,
};

export const AddressInput = ({
  label,
  required,
  name,
  onChange,
  formData,
  ...props
}) => {
  const [showMap, setShowMap] = useState(false);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mainAutocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const handlePlaceChangedMain = () => {
    const place = mainAutocompleteRef.current.getPlace();
    if (!place.geometry) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    onChange(name, place.formatted_address);
    onChange('coordinates', { lat, lng });

    setSelectedLocation({ lat, lng });
    setMapCenter({ lat, lng });
  };

  const handleMapClick = e => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setSelectedLocation({ lat, lng });
    setMapCenter({ lat, lng });

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results[0]) {
        onChange(name, results[0].formatted_address);
        onChange('coordinates', { lat, lng });
      }
    });
  };

  useEffect(() => {
    const coords = formData.coordinates;
    if (coords && coords.lat && coords.lng) {
      setSelectedLocation(coords);
      setMapCenter(coords);
    }
  }, [formData.coordinates]);

  return (
    <Form.Group className='mb-3'>
      <Form.Label>
        {label}
        {required && <span style={{ color: 'red' }}> *</span>}
      </Form.Label>
      <div className='d-flex gap-2'>
        <Autocomplete
          onLoad={autocomplete => (mainAutocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChangedMain}
        >
          <Form.Control
            type='text'
            placeholder='Συμπληρώστε διεύθυνση'
            value={formData[name] || ''}
            onChange={e => onChange(name, e.target.value)}
            {...props}
          />
        </Autocomplete>
        <Button
          iconLeft={faLocationDot}
          onClick={() => setShowMap(true)}
          style={{ width: '2rem' }}
        />
      </div>

      <Modal show={showMap} onHide={() => setShowMap(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Επιλογή τοποθεσίας στον χάρτη</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={14}
            onClick={handleMapClick}
            onLoad={map => (mapRef.current = map)}
          >
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
        </Modal.Body>
        <Modal.Footer>
          <Button label='Εντάξει' onClick={() => setShowMap(false)} />
        </Modal.Footer>
      </Modal>
    </Form.Group>
  );
};
