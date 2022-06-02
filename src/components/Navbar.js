import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="Flex-Row Align-Center">
    <h1>Bookstore CMS</h1>
    <ul className="Flex-Row Align-Center">
      <li>BOOKS</li>
      <li>CATEGORIES</li>
    </ul>
  </nav>
);

export default Navbar;
