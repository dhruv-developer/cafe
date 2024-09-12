import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import FoodGallery from './components/FoodGallery';

function App() {

return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <FoodGallery/>
      <AboutUs />
      <Footer />
    </div>
);
}

export default App;
