import React from 'react';
import logo from './logo.svg';
import NavBars from './components/NavBars'
import HeroSection from './components/HeroSection'
import Service from './components/Service'
import Subscribe from './components/Subscribe'
import PopularFlight from './components/PopularFlight'
import BestFlight from './components/BestFlight'
import Footer from './components/Footer'


function App() {
  return (
   <React.Fragment>
      <NavBars/>
      <HeroSection/>
      <Service/>
      <Subscribe/>
      <PopularFlight/>
      <BestFlight/>
      <Footer/>
   </React.Fragment>
  );
}

export default App;
