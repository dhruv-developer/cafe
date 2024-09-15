import React from 'react';
import './mar.css'; // Import the CSS with the marquee animation

const Vision = () => {
  return (
    <section id="vision" className="py-16 bg-custom-back">
      <div className="max-w-4xl mx-auto text-center">
        <div className='marquee-container'>

        <h2 className="text-4xl font-bold mb-6 text-gray-800 marquee-text">Our Vision</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          To become the go-to dining destination for professionals in the corporate park, known for our quality, efficiency, and memorable flavors. We strive to offer a space where food fosters connection, whether it’s among colleagues, clients, or friends.
        </p>
      </div>
    </section>
  );
};

export default Vision;
