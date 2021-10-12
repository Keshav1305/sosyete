import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';


import markers from "../../assets/data/markers.json";

import all from "../../assets/images/all.png";
import plastic from "../../assets/images/plastic.png";
import plasticandcans from "../../assets/images/plasticandcans.png";
import battery from "../../assets/images/battery.png";
import building from "../../assets/images/building.png";
import oil from "../../assets/images/oil.png";
import ewaste from "../../assets/images/ewaste.png";
import glass from "../../assets/images/glass.png";
import rightbg from "../../assets/images/rightbg.png";
import leftbg from "../../assets/images/leftbg.png";
import section4 from "../../assets/images/section4.png";

import "./HpMapLegend.styles.scss";


import "./HpBloc3.styles.scss"

const MyMapComponent = (props) => {
  const { iconSelected } = props;

  const [infoWindowContent, setInfoWindow] = useState(null);
  const [userPos, setUserPos] = useState(null);
  const [userPermission, setUserPermission] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setUserPos(pos)
    });
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setUserPermission(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            setUserPermission(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            setUserPermission(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  let pos = {
    lat: -20.26933032066475,
    lng: 57.57212066597212
  }
  if (userPos) {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={userPos}
      >
        {markers.markers.map((marker) => {
          if (!iconSelected.includes(marker.type)) {
            return;
          }
          return (
            <Marker
              key={marker.id}
              position={{
                lat: marker.lat, lng: marker.lng
              }}
              onClick={() => { setInfoWindow(marker) }}
              icon={{
                url: (marker.type === "all" ? all : "") || (marker.type === "plastic" ? plastic : "") || (marker.type === "plasticandcans" ? plasticandcans : "") || (marker.type === "battery" ? battery : "") || (marker.type === "building" ? building : "") || (marker.type === "oil" ? oil : "") || (marker.type === "ewaste" ? ewaste : "") || (marker.type === "glass" ? glass : ""),
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
  if (userPermission !== "granted") {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={pos}
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
                url: (marker.type === "all" ? all : "") || (marker.type === "plastic" ? plastic : "") || (marker.type === "plasticandcans" ? plasticandcans : "") || (marker.type === "battery" ? battery : "") || (marker.type === "building" ? building : "") || (marker.type === "oil" ? oil : "") || (marker.type === "ewaste" ? ewaste : "") || (marker.type === "glass" ? glass : ""),
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
  return (
    ""
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent))

export default function HpBloc3() {

  const [iconSelected, setIconSelected] = useState("");

  useEffect(() => {
    document.querySelectorAll('.switch').forEach(elem => {
      let svg = elem.querySelector('svg'),
        input = elem.querySelector('input')
      input.addEventListener('change', e => {
        let checked = input.checked
        let hide = checked ? 'default' : 'dot',
          show = checked ? 'dot' : 'default'
        gsap.fromTo(svg, {
          '--default-s': checked ? 1 : 0,
          '--default-x': checked ? '0px' : '8px',
          '--dot-s': checked ? 0 : 1,
          '--dot-x': checked ? '-8px' : '0px'
        }, {
          ['--' + hide + '-s']: 0,
          ['--' + hide + '-x']: checked ? '8px' : '-8px',
          duration: .25,
          delay: .15
        })
        gsap.fromTo(input, {
          '--input-background': checked ? '#d2d6e9' : '#275efe',
        }, {
          '--input-background': checked ? '#275efe' : '#d2d6e9',
          duration: .35,
          clearProps: true
        })
        gsap.to(svg, {
          keyframes: [{
            ['--' + show + '-x']: checked ? '2px' : '-2px',
            ['--' + show + '-s']: 1,
            duration: .25
          }, {
            ['--' + show + '-x']: '0px',
            duration: .2,
            clearProps: true
          }]
        })
      })
    })

  }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    let icons = "";
    if (iconSelected !== "") {
      icons = JSON.parse(iconSelected);
      if (checked) {
        icons.push(value);
      } else {
        if (icons.indexOf(value) >= 0) {
          icons.splice(icons.indexOf(value), 1);
        }
      }
      icons = JSON.stringify(icons);
      setIconSelected(icons);
    } else {
      icons = [];
      icons.push(value);
      icons = JSON.stringify(icons);
      setIconSelected(icons);
    }
  }


  return (
    <div className="container">
      <div className="map-legend">
        <img src={rightbg} className="map-legend__right-bg" />
        <img src={leftbg} className="map-legend__left-bg" />
        <div className="map-legend__left-img">
          <img src={section4} />
        </div>
        <div className="map-legend__content">
          <div className="map-legend__content__title">
            <h3>
              find recycling bins near you!
            </h3>
          </div>
          <div className="map-legend__content__text">
            Legend for the map:
          </div>
          <div className="map-legend__content__legends">
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="battery" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={battery} />
              <span>Battery</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="plastic" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={plastic} />
              <span>Plastic Bottles</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="plasticandcans" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={plasticandcans} />
              <span>Plastic and Cans</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="all" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={all} />
              <span>Plastic bottles, Aluminium cans, Papers and Cartons</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="building" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={building} />
              <span>Recycling Industry</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="oil" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={oil} />
              <span>Oil</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="glass" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={glass} />
              <span>Glass</span>
            </div>
            <div className="legend">
              <label className="switch">
                <input type="checkbox" value="ewaste" onChange={(e) => { handleChange(e) }} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                  <circle className="default" cx="12" cy="12" r="8" />
                  <circle className="dot" cx="26" cy="12" r="8" />
                </svg>
              </label>
              <img src={ewaste} />
              <span>E-waste</span>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <WrappedMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDFNVhCsy7GYTSn8WhIVJltAw0ovyJjqW4`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          iconSelected={iconSelected}
        />
      </div>
    </div>
  )
}