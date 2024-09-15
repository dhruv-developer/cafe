import React from 'react';
import './mar.css'; // Import the CSS with the marquee animation

const Overview = () => {
  return (
    <section id="overview" className="py-16 bg-custom-back">
      <div className="max-w-4xl mx-auto text-center">
        <div className="marquee-container">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 marquee-text">
            About Us
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Varaharoopam is an exciting new addition to the culinary scene, offering a unique fusion of traditional South Indian flavors with a modern twist.
          We blend age-old recipes with contemporary tastes, delivering comfort food that brings people together. Our dishes are made from fresh, local ingredients 
          with love and tradition in every bite.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our restaurant is designed to cater to busy professionals, offering a comforting escape with fresh, flavorful, and wholesome meals. If you're looking for a quick and satisfying meal, Varaharoopam has you covered.
          Our express lunch and dinner options offer a variety of delicious dishes that are prepared quickly without compromising on taste or quality.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our team at Varaharoopam is dedicated to providing exceptional service and ensuring that every guest has a memorable dining experience. From our chefs to our waitstaff, our employees are passionate about South Indian cuisine and committed to delivering the highest quality food and service.
        </p>
      </div>
    </section>
  );
};

export default Overview;
