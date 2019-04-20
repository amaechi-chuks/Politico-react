import React from 'react';
// import { render } from '../../../enzyme.config';

const Header = () => {
  return (
    <div>
      <div className="modal-toggle" />
      <header className="sticky-top">
        <nav className="navbar">
          <a href="./index.html" className="navbar-logo">
            <img src=".../assets/img/Image-logo.png" alt="landing-page logo" />
          </a>
          {/* <button className="hamburger-menu"><a href="./index.html" className="hamburger"></a></button> */}
          <ul className="navbar-menu">
            <li className="navbar-link">
              <a href="./login.html">Login</a>
            </li>
            <li className="navbar-link">
              <a href="./signup.html">Sign Up</a>
            </li>
            <li className="navbar-link">
              <a href="./view-more-candidate.html">View Candidatess</a>
            </li>
            <li className="navbar-link">
              <a href="./admin-profile.html">Admin</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
