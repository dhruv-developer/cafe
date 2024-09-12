import React from 'react';

const Menu = () => {
  const menuItems = [
    { name: 'Classic Thatte Idli', price: '₹40' },
    { name: 'Ghee Masala Dosa', price: '₹90' },
    { name: 'Varaha Ghee Pudina Rice', price: '₹90' },
    // Add other items here
  ];

  return (
    <section id="menu" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Our Menu</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
