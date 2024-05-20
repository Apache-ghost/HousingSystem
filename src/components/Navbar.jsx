import React from 'react';
import './Header.css';
import './index.css';

const Navbar = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./public/images/Icon.png" alt="icon" width={30} />
        <div className="flexCenter h-menu">
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Property</a>
          <a href="/">Services</a>
          <a href="/">Agents</a>
          <a href="/">Contact us</a>
          <button className="button">
            <a href="/">Log-in</a>
          </button>
          <a href="/">Sign-up</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;