import React, { useState } from 'react';
import './mar.css'; // Import the CSS with the marquee animation

const Menu = () => {
  const [showFullMenu, setShowFullMenu] = useState({
    idli: false,
    dosa: false,
    breakfast: false,
    rice: false,
    lunch: false,
    snacks: false,
    beverages: false,
    desserts: false
  });

  const toggleMenu = (category) => {
    setShowFullMenu((prevState) => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const categories = [
    {
      title: 'VARAHA IDLI',
      items: [
        { name: 'Classic Thatte Idli', price: '₹40' },
        { name: 'Tossed Button Idli (Lemon/Tomato/Pudina)', price: '₹80' },
        { name: 'Button Idli Sambar Dip', price: '₹60' },
        { name: 'Rava Idli', price: '₹50' },
        { name: 'Pudi Thatte Idli', price: '₹50' },
      ],
      key: 'idli',
    },
    {
      title: 'VARAHA DOSA',
      items: [
        { name: 'Ghee Masala Dosa', price: '₹90' },
        { name: 'Open Butter Masala Dosa', price: '₹50' },
        { name: 'Onion Dosa', price: '₹90' },
        { name: 'Plain Dosa', price: '₹70' },
        { name: 'Varaha Special Pudi Masala Dose', price: '₹100' },
        { name: 'Ghee Set Dosa', price: '₹90' },
        { name: 'Ragi Dosa (2)', price: '₹60' },
        { name: 'Multi Grain Dosa (2)', price: '₹60' },
      ],
      key: 'dosa',
    },
    {
      title: 'BREAKFAST SPECIALS',
      items: [
        { name: 'Ghee Shavige (Lemon/Tomato/Pudina)', price: '₹70' },
        { name: 'Bise Bele Bath', price: '₹60' },
        { name: 'Ghee Paadu', price: '₹85' },
        { name: 'Sweet Pongal', price: '₹50' },
        { name: 'Poori-Saagu', price: '₹70' },
      ],
      key: 'breakfast',
    },
    {
      title: 'RICE ITEMS',
      items: [
        { name: 'Varaha Ghee Pudina Rice', price: '₹90' },
        { name: 'Ghee Tomato Rice', price: '₹90' },
        { name: 'Pudi Rice', price: '₹90' },
        { name: 'Lemon Rice', price: '₹60' },
        { name: 'Puliyogare', price: '₹50' },
        { name: 'Curd Rice', price: '₹50' },
      ],
      key: 'rice',
    },
    {
      title: 'LUNCH COMBOS',
      items: [
        { name: 'South Indian Meal', price: '₹100' },
        { name: 'Varaha Executive Meal', price: '₹120' },
      ],
      key: 'lunch',
    },
    {
      title: 'SNACKS & SMALL BITES',
      items: [
        { name: 'Varaha Vada Platter (8)', price: '₹60' },
        { name: 'Baale Kai (Banana) Bajji (4)', price: '₹30' },
        { name: 'Masala Vada (4)', price: '₹30' },
        { name: 'Chilli Bajji (4)', price: '₹30' },
        { name: 'Mysore Bonda (4)', price: '₹35' },
      ],
      key: 'snacks',
    },
    {
      title: 'HOT BEVERAGES',
      items: [
        { name: 'Filter Coffee', price: '₹25' },
        { name: 'Jaggery Coffee', price: '₹25' },
        { name: 'Masala Tea', price: '₹25' },
        { name: 'Ginger Tea', price: '₹25' },
        { name: 'Badam Milk', price: '₹30' },
      ],
      key: 'beverages',
    },
    {
      title: 'DESSERTS',
      items: [
        { name: 'Payasam of the day', price: '₹30' },
        { name: 'Elaner Payasam', price: '₹40' },
        { name: 'Gulab Jamoon', price: '₹25' },
        { name: 'Coconut Pudding', price: '₹100' },
      ],
      key: 'desserts',
    }
  ];

  return (
    <section id="menu" className="py-16 bg-custom-back">
      <div className="marquee-container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 marquee-text">Our Menu</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.title}</h3>
            <ul className="text-lg leading-relaxed text-gray-700">
              {(showFullMenu[category.key] ? category.items : category.items.slice(0, 2)).map((item, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button
                onClick={() => toggleMenu(category.key)}
                className="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-yellow-400 transition duration-300"
              >
                {showFullMenu[category.key] ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
