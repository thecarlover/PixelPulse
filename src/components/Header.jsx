import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 md:flex md:justify-between md:items-center ${menuOpen ? 'h-screen' : 'auto'}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PixelPulse</Link>
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <svg className="w-8 h-8 text-white hover:text-pink-200 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8 text-white hover:text-pink-200 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} mt-4 md:mt-0 w-full md:w-auto`}>
        <Link to="/" className="block mt-4 md:inline-block md:mt-0 mr-4 hover:text-pink-200 transition duration-300">Home</Link>
        <Link to="/about" className="block mt-4 md:inline-block md:mt-0 mr-4 hover:text-pink-200 transition duration-300">About</Link>
        <Link to="/contact" className="block mt-4 md:inline-block md:mt-0 hover:text-pink-200 transition duration-300">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
