import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyService from './components/MyService';
import MyPortfolio from './components/MyPortfolio';
import MyExperience from './components/MyExperience';
import ContactME from './components/ContactME';

function App() {
  return (
    <Fragment>
    <section>
        <Navbar /> </section>
        <Home />
        <AboutMe />
        <MyService />
        <MyPortfolio />
        <MyExperience />
        <ContactME />
    </Fragment>

  );
}

export default App;
