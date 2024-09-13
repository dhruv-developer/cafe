import imagee from './logo.jpeg'

const Navbar = () => {
  return (
    <nav className="bg-yellow-800 bg-opacity-80 fixed w-full p-4 z-10 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={imagee} alt="Cafe Varaharoopam Logo" className="h-16 w-16 md:h-20 md:w-20 mr-4 object-cover rounded-full" />
        <h1 className="text-white text-2xl font-bold">CAFE VARAHAROOPAM</h1>
      </div>
      {/* Navigation links */}
      <ul className="flex space-x-8 text-white font-semibold">
        <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a></li>
        <li><a href="#menu" className="hover:text-yellow-400 transition duration-300">Menu</a></li>
        <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
