import React, { useState } from 'react';

import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';

import markers from "../../assets/data/markers.json";

import recyclebin from "../../assets/images/recycle-bin.png";
import recyclingcontainer from "../../assets/images/recycling-container.png";
import factory from "../../assets/images/factory.png";
import trashcan from "../../assets/images/trash-can.png";


import "./HpBloc3.styles.scss"

const MyMapComponent = () => {
  const [infoWindowContent, setInfoWindow] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
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
              url: (marker.type === "plastic" ? recyclebin : "") || (marker.type === "plasticarton" ? trashcan : "") || (marker.type === "all" ? recyclingcontainer : "") || (marker.type === "industry" ? factory : ""),
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