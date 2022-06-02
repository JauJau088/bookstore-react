import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="Flex-Row Align-Center">
    <h1>Bookstore CMS</h1>
    <ul className="Flex-Row Align-Center">
      <li>
        <Link to="/books" exact="true">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" exact="true">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
