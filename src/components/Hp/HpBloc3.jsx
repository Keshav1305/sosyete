import React from 'react';

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import "./HpBloc3.styles.scss"

const MyMapComponent = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -20.06365685400934, lng: 57.58296181544379 }}
  >
  </GoogleMap>
))

export default function HpBloc3() {
  return (
    <div className="container">
      <div className="map">
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDFNVhCsy7GYTSn8WhIVJltAw0ovyJjqW4`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  )
}