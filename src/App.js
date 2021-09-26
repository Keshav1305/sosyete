import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Hp from './components/Hp/Hp';
import Footer from './components/footer/Footer';

import "./styles/base/_reset.scss";
import "./styles/base/_base.scss";

export default function App() {
  useEffect(() => {
    document.title = "Sosyete Zero Gaspiyaz";
  }, []);

  return (
    <div className="App" id="Main">
      <Header />
      <Hp />
      <Footer />
    </div>
  );
}