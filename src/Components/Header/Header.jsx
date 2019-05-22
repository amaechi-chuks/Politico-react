import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/howItWorks.css';
import AppLogo from '../../assets/img/AppLogo.png';

const Header = () => {
  return (
    <div>
      <div className="modal-toggle" />
      <header className="sticky-top">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={AppLogo} alt="App logo" />
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar-link">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
