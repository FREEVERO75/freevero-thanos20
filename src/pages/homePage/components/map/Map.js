import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Col, Row } from 'react-bootstrap';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.9838,
  lng: 23.7275,
};

export const Map = () => {
  return (
    <div className='d-flex flex-column gap-3 pt-5 mt-5'>
      <Row>
        <Col xs={12}>
          <h2 className='text-center'>Δες διαθέσιμα οχήματα στο χάρτη</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className='rounded-lg'>
            <LoadScript googleMapsApiKey='AIzaSyD0OziLlVre0mt_HweXTG46yoUOvsDOLCY'>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
              ></GoogleMap>
            </LoadScript>
          </div>
        </Col>
      </Row>
    </div>
  );
};
