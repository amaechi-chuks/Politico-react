/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../Components/Global/User';
import ProfileImage from '../assets/img/profileuser.png';
import ProfileTable from './ProfileTable';
import Footer from '../Components/Footer/Footer';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserHeader />
        <section className="container">
          <h2 className="section-title">User Profile</h2>
          <div className="profile">
            <div className="card profile-card">
              <img className="profile-image" src={ProfileImage} alt="user" />

              <p className="profile-name">Amaechi Chuks</p>
              <p>Voting Records</p>
              <div className="profile-stats">
                <div className="stats">
                  <p className="stat-value">3</p>
                  <span className="stat-type">APC</span>
                </div>
                <div className="stats">
                  <p className="stat-value">5</p>
                  <span className="stat-type">PDP</span>
                </div>
                <div className="stats">
                  <p className="stat-value">8</p>
                  <span className="stat-type">Total</span>
                </div>
              </div>
              <Link to="./update-profile.html" className="btn btn-primary2">
                Edit Profile
              </Link>
            </div>
            <ProfileTable />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default UserProfile;
