import React, { useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';

import HpMapLegend from './HpMapLegend';

import markers from "../../assets/data/markers.json";

import all from "../../assets/images/all.png";
import plastic from "../../assets/images/plastic.png";
import plasticandcans from "../../assets/images/plasticandcans.png";
import battery from "../../assets/images/battery.png";
import building from "../../assets/images/building.png";


import "./HpBloc3.styles.scss"

const MyMapComponent = () => {
  const [infoWindowContent, setInfoWindow] = useState(null);
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: -20.26933032066475, lng: 57.57212066597212 }}
    >
      {markers.markers.map((marker) => {
        return (
          <Marker
            key={marker.id}
            position={{
              lat: marker.lat, lng: marker.lng
            }}
            onClick={() => { setInfoWindow(marker) }}
            icon={{
              url: (marker.type === "all" ? all : "") || (marker.type === "plastic" ? plastic : "") || (marker.type === "plasticandcans" ? plasticandcans : "") || (marker.type === "battery" ? battery : "") || (marker.type === "building" ? building : ""),
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        )
      })}
      {infoWindowContent &&
        <InfoWindow
          position={{
            lat: infoWindowContent.lat, lng: infoWindowContent.lng
          }}
          onCloseClick={() => { setInfoWindow(null) }}
        >
          <div>
            <h2>
              {infoWindowContent.typeName}
            </h2>
            <p>
              {infoWindowContent.address}
            </p>
          </div>
        </InfoWindow>
      }
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent))

export default function HpBloc3() {
  return (
    <div className="container">
      <HpMapLegend />
      <div className="map">
        <WrappedMap
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