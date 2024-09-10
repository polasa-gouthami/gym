import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#gym" className="text-2xl font-bold text-red-600">
          Gym
        </a>

        
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

      
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-red-600 font-bold">
            Home
          </a>
          <a href="#about" className="text-white">
            About Us
          </a>
          <a href ="#classes" className="text-white">
            Classes
          </a>
          <a href="#team" className="text-white">
            OurTeam
          </a>
          <a href="#pricing" className="text-white">
            Pricing
          </a>

        </nav>

        <Link to="/register" className="hidden md:block bg-red-500 text-white px-4 py-2 rounded">
          Join Us
        </Link>
      </div>

      
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white space-y-2 p-4">
          <Link to="/home" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About 
          </Link>
          <Link to="/classes" className="block">
            Classes
          </Link>
          <Link to="/team" className="block">
            OurTeam
          </Link>
          <Link to="/pricing" className="block">
            Pricing
          </Link>
          <Link to="/register" className="block bg-red-500 text-white px-4 py-2 rounded">
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
