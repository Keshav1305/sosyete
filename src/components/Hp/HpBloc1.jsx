import React from 'react';

import "./HpBloc1.styles.scss"

import right from "../../assets/images/section1.1.png";
import background from "../../assets/images/section1.2.png";

export default function HpBloc1() {
  return (
    <div className="container">
      <div className="hp-bloc1">
        <div className="hp-bloc1__left">
          <img src={background} className="hp-bloc1__left__background" />
          <img src={right} className="hp-bloc1__left__background1" />
          <div className="hp-bloc1__left__title">
            <h2>Five R's of Zero Waste Management</h2>
          </div>
          <div className="hp-bloc1__left__texts">
            <div className="bigr">
              R
            </div>
            <div className="r-words">
              <div className="r-word">
                educe
              </div>
              <div className="r-word">
                euse
              </div>
              <div className="r-word">
                epurpose
              </div>
              <div className="r-word">
                ecycle
              </div>
              <div className="r-word">
                ot
              </div>
            </div>
          </div>
          <div className="hp-bloc1__left__btn">
            <div className="text">
              anou fer premie pa!
            </div>
            <button><span>Read more</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}