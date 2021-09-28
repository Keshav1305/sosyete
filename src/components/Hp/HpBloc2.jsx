import React from 'react';

import "./HpBloc2.styles.scss"

import section2 from "../../assets/images/section2.png";
import icon from "../../logo.png";

export default function HpBloc2() {
  return (
    <div className="container">
      <div className="hp-bloc2">
        <div className="hp-bloc2__left">
          <div className="hp-bloc2__left__texts">
            <div className="hp-bloc2__left__texts__title">
              <h2>
                who are we?
              </h2>
              <div className="title-divider">
              </div>
            </div>
            <div className="hp-bloc2__left__texts__text">
              <p>
                Sosyete Zero Gaspiyaz is a community based non-profit youte organisation that promotes minimal wastage
                in the Mauritian society by spreading awareness about five R's of zero waste management.
              </p>
            </div>
            <div className="hp-bloc2__left__texts__btn">
              <button><span>Read more</span></button>
            </div>
            <div className="hp-bloc2__left__texts__logo">
              <img src={icon} />
            </div>
          </div>
        </div>
        <div className="hp-bloc2__right">
          <img src={section2} className="hp-bloc2__right__img" />
        </div>
      </div>
    </div>
  );
}