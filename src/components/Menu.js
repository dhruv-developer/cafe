const Menu = () => {
  const menuItems = [
    { name: 'Classic Thatte Idli', price: '₹40' },
    { name: 'Ghee Masala Dosa', price: '₹90' },
    { name: 'Varaha Ghee Pudina Rice', price: '₹90' },
    { name: 'Sweet Pongal', price: '₹50' },
    { name: 'Curd Rice', price: '₹50' },
    { name: 'Mysore Bonda', price: '₹35' },
    { name: 'Gulab Jamoon', price: '₹25' },
    // Add more items here
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="text-lg leading-relaxed text-gray-700">
          {menuItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-4">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
