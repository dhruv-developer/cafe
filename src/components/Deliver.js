import React from 'react';
import './mar.css'; // Import the CSS with the marquee animation

const WhatWeDeliver = () => {
  return (
    <section id="what-we-deliver" className="py-16 bg-custom-back">
      <div className="max-w-4xl mx-auto text-center">
      <div className="marquee-container">
        <div className='marquee-container'>

        <h2 className="text-4xl font-bold mb-6 text-gray-800">What We Deliver</h2>
        </div>
        </div>
        <ul className="text-lg text-gray-700 leading-relaxed space-y-4">
          <li>
            <strong>Authentic South Indian Cuisine:</strong> A carefully curated menu that celebrates the diversity of South Indian flavors, from traditional dosa and idli to innovative fusion dishes.
          </li>
          <li>
            <strong>Express Meals for Busy Professionals:</strong> Designed with corporate schedules in mind, our quick-serve options allow diners to enjoy fresh meals without compromising on time.
          </li>
          <li>
            <strong>Healthy and Sustainable Options:</strong> We prioritize fresh, locally sourced ingredients and offer a range of healthy options, including vegetarian and gluten-free dishes.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
