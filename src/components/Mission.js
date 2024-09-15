import React from 'react';
import './mar.css'; // Import the CSS with the marquee animation

const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-custom-back">
      <div className="max-w-4xl mx-auto text-center">
      <div className="marquee-container">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 ">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          To create a dining experience that brings people together, whether for a quick bite, a business lunch, or a leisurely meal. We are committed to serving authentic, high-quality South Indian cuisine with an emphasis on sustainability, fresh ingredients, and exceptional service.
        </p>
      </div>
    </section>
  );
};

export default Mission;
