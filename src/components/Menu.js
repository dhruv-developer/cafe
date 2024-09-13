import React, { useState } from 'react';

const Menu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  // Limited menu items
  const menuItems = [
    { name: 'Classic Thatte Idli', price: '₹40' },
    { name: 'Ghee Masala Dosa', price: '₹90' },
    { name: 'Varaha Ghee Pudina Rice', price: '₹90' },
    { name: 'Sweet Pongal', price: '₹50' },
    { name: 'Curd Rice', price: '₹50' },
    { name: 'Mysore Bonda', price: '₹35' },
    { name: 'Gulab Jamoon', price: '₹25' },
  ];

  // Full menu items
  const fullMenuItems = [
    ...menuItems, // Includes the limited items first
    { name: 'Tossed Button Idli (Lemon/Tomato/Pudina)', price: '₹80' },
    { name: 'Button Idli Sambar Dip', price: '₹60' },
    { name: 'Rava Idli', price: '₹50' },
    { name: 'Pudi Thatte Idli', price: '₹50' },
    { name: 'Open Butter Masala Dosa', price: '₹50' },
    { name: 'Onion Dosa', price: '₹90' },
    { name: 'Plain Dosa', price: '₹70' },
    { name: 'Varaha Special Pudi Masala Dose', price: '₹100' },
    { name: 'Ragi Dosa (2)', price: '₹60' },
    { name: 'Multi Grain Dosa (2)', price: '₹60' },
    { name: 'Ghee Shavige (Lemon/Tomato/Pudina)', price: '₹70' },
    { name: 'Bise Bele Bath', price: '₹60' },
    { name: 'Ghee Paadu', price: '₹85' },
    { name: 'Poori-Saagu', price: '₹70' },
    { name: 'Kesari Bath', price: '₹50' },
    { name: 'Kharabath', price: '₹50' },
    { name: 'Udina Vada', price: '₹35' },
    { name: 'Varaha Tiffin Combo', price: '₹140' },
    { name: 'Curd Vada', price: '₹50' },
    { name: 'Varaha Vada Platter (8)', price: '₹60' },
    { name: 'Baale Kai (Banana) Bajji (4)', price: '₹30' },
    { name: 'Masala Vada (4)', price: '₹30' },
    { name: 'Chilli Bajji (4)', price: '₹30' },
    { name: 'Filter Coffee', price: '₹25' },
    { name: 'Jaggery Coffee', price: '₹25' },
    { name: 'Masala Tea', price: '₹25' },
    { name: 'Ginger Tea', price: '₹25' },
    { name: 'Badam Milk', price: '₹30' },
    { name: 'Payasam of the day', price: '₹30' },
    { name: 'Gulab Jamoon', price: '₹25' },
    // Add more as needed
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="text-lg leading-relaxed text-gray-700">
          {(showFullMenu ? fullMenuItems : menuItems).map((item, index) => (
            <li key={index} className="flex justify-between border-b py-4">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        {!showFullMenu && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowFullMenu(true)}
              className="bg-yellow-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Show More Menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
