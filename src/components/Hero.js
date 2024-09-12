import React from 'react';

const Hero = () => {
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-white text-center p-8">
          <h1 className="text-6xl font-bold tracking-wide leading-tight">Welcome to Cafe Varaharoopam</h1>
          <p className="mt-4 text-2xl font-light">Delicious South Indian Cuisine with a Modern Twist</p>
          <a href="#menu" className="mt-8 inline-block bg-yellow-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">Explore Menu</a>
        </div>
      </section>
    );
  };
  
export default Hero;
