import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/kedilogo.png" alt="KEDI Foundation Logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/programs" onClick={() => setIsOpen(false)}>Programs</a></li>
        <li><a href="/impact" onClick={() => setIsOpen(false)}>Impact</a></li>
        <li><a href="/partners" onClick={() => setIsOpen(false)}>Partners</a></li>
        <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;