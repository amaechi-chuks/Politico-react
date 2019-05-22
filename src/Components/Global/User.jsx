/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import '../../assets/style/howItWorks.css';
import AppLogo from '../../assets/img/AppLogo.png';

const UserHeader = () => {
  return (
    <div>
      <div className="modal-toggle" />
      <header className="sticky-top">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={AppLogo} alt="App logo" />
          </Link>
          <button type="submit" className="hamburger-menu">
            <a className="hamburger" />
          </button>
          <ul className="navbar-menu">
            <li className="navbar-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-link">
              <Link to="/apply">Apply to contest</Link>
            </li>
            <li className="navbar-link">
              <Link to="./vote.html">Vote</Link>
            </li>
            <li className="navbar-link active">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar-link">
              <Link to="/view-more-candidate">View Candidates</Link>
            </li>
            <li className="navbar-link">
              <Link to="./index.html">Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default UserHeader;
