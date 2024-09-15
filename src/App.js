import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import FoodGallery from './components/FoodGallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Mission from './components/Mission';
import Vision from './components/Vision';
import WhatWeDeliver from './components/Deliver';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview /> {/* Overview Section */}
      <Mission /> {/* Mission Section */}
      <Vision /> {/* Vision Section */}
      <WhatWeDeliver /> {/* What We Deliver Section */}
      <Menu />
      <FoodGallery />
      <Footer />
    </div>
  );
}

export default App;
