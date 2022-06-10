import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="Flex-Row Align-Center Just-Center">
    <div className="Nav-Container Flex-Row Align-Center">
      <h1>Bookstore CMS</h1>
      <ul className="Flex-Row Align-Center">
        <li>
          <NavLink
            style={(navData) => ({
              fontWeight: navData.isActive ? '500' : '300',
              color: navData.isActive ? 'black' : 'grey',
            })}
            to="/books"
            exact="true"
          >
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(navData) => ({
              fontWeight: navData.isActive ? '500' : '300',
              color: navData.isActive ? 'black' : 'grey',
            })}
            to="/categories"
            exact="true"
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <button type="button" className="LoginIcon-Button Flex-Row Just-Center Align-Center">
        <span className="material-icons LoginIcon-Icon">person</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
