import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Hp from './components/Hp/Hp';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import "./styles/base/_reset.scss";
import "./styles/base/_base.scss";

export default function App() {
  useEffect(() => {
    document.title = "Sosyete Zero Gaspiyaz";
  }, []);

  return (
    <div className="App" id="Main">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact-us" component={Contact} />
          <Route path="/" component={Hp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}