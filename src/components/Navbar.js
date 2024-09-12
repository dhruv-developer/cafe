const Navbar = () => {
    return (
      <nav className="bg-gray-900 bg-opacity-80 fixed w-full p-4 z-10">
        <ul className="flex justify-center space-x-8 text-white font-semibold">
          <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a></li>
          <li><a href="#menu" className="hover:text-yellow-400 transition duration-300">Menu</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
        </ul>
      </nav>
    );
  };
  
export default Navbar;
