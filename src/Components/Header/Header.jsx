import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/howItWorks.css';
import AppLogo from '../../assets/img/AppLogo.png';
import Button from '../Global/Buttons';

const Header = () => {
  return (
    <div>
      <div className="modal-toggle" />
      <header className="sticky-top">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={AppLogo} alt="App logo" />
          </Link>
          <Button value="menu" className="hamburger-menu">
            <Link to="/HomePage" className="hamburger" />
          </Button>
          <ul className="navbar-menu">
            <li className="navbar-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar-link">
              <Link to="/register">Sign Up</Link>
            </li>
            <li className="navbar-link">
              <Link to="view-more-candidate">View Candidatess</Link>
            </li>
            <li className="navbar-link">
              <Link to="admin-profile">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
