import React from 'react';
import './Header.css';
import logo from '../assets/Mac2.jpg';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Web Developer</p>
          <h1>Hey I am <span>MAC</span> From India</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
