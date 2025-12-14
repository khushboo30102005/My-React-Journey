import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <h2>Khushboo</h2>
        <div className="right-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
