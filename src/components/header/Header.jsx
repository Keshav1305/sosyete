import React, { useEffect, useState } from 'react';
import logo from "../../logo.png";

import "./Header.styles.scss";

export default function Header() {
  // set sticky header on
  const [navOpen, setActive] = useState(false);
  const toggleActiveState = () => {
    setActive(!navOpen);
  };

  // Stick header on 
  const [hasScrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const y = window.scrollY;
    if (y > 400) {
      setScrolled(true);
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });
  return (
    <div className="container">
      <div className="container-inner">
        <header className={`main-header${hasScrolled ? " sticky" : ""}`}>
          <div className="logo">
            <img src={logo} />
            <a href="/">
              Sosyete Zero Gaspiyaz
            </a>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">5R's</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>

            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
