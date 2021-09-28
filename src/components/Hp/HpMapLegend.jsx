import React from "react";

import all from "../../assets/images/all.png";
import plastic from "../../assets/images/plastic.png";
import plasticandcans from "../../assets/images/plasticandcans.png";
import battery from "../../assets/images/battery.png";
import building from "../../assets/images/building.png";
import rightbg from "../../assets/images/rightbg.png";
import leftbg from "../../assets/images/leftbg.png";
import section4 from "../../assets/images/section4.png";

import "./HpMapLegend.styles.scss";

export default function HpMapLegend() {
  return (
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
            <img src={battery} />
            <span>Battery</span>
          </div>
          <div className="legend">
            <img src={plastic} />
            <span>Plastic Bottles</span>
          </div>
          <div className="legend">
            <img src={plasticandcans} />
            <span>Plastic and Cans</span>
          </div>
          <div className="legend">
            <img src={all} />
            <span>Paper, Cartons, Plastics and Cans</span>
          </div>
          <div className="legend">
            <img src={building} />
            <span>Recycling Industry</span>
          </div>
        </div>
      </div>
    </div>
  )
}