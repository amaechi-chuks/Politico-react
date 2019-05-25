/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/nav.css';
import AppLogo from '../../assets/img/AppLogo.png';

const UserHeader = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">
            <img src={AppLogo} alt="App logo" />
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span />
        </label>
      </div>
      <div className="nav-links">
        <Link to="/logout">Log Out</Link>
      </div>
    </div>
  );
};
export default UserHeader;
