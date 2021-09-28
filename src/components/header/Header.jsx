import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from "../../logo.png";

import "./Header.styles.scss";

export default function Header() {
  // set sticky header on
  const [navOpen, setActive] = useState(false);
  let history = useHistory();
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

  const handleRedirect = (url) => {
    history.push(url);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });
  return (
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
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleRedirect("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleRedirect("/");
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleRedirect("/");
              }}
            >
              5R's
            </a>
          </li>
          <li>
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                handleRedirect("/contact-us");
              }}
            >
              Contact Us
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
