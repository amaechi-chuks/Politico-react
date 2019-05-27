/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';
import UserHeader from '../Components/Global/User';
import PartyList from '../Party/PartyList/PartyList';
import UserTab from '../UserTab/UserTab';
import avatar from '../assets/img/avatar.png';
import upload from '../services/upload';
import Loader from '../Components/Global/Loader';
import Button from '../Components/Global/Buttons';
import './user.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      loading: false,
      currentTab: 'party-section',
    };
  }

  componentDidMount = () => {
    const { fetchAllParty } = this.props;
    fetchAllParty();
  };

  handleChange = async e => {
    this.setState({ loading: true });
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ imageUrl: reader.result });
    };
  };

  uploadImage = async () => {
    const { imageUrl } = this.state;
    const formData = new FormData();
    formData.append('passporturl', imageUrl);
    await upload.uploadPic(formData);
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user, 'profile');
    const { loading, currentTab } = this.state;
    const { partyList } = this.props;
    const { partyList: data } = partyList;
    return (
      <React.Fragment>
        <div>
          {loading && <Loader />}
          <Notifications />
          <UserHeader />
          <section className="container">
            <h2 className="section-title">User Profile</h2>
            <div className="profile">
              <div className="card profile-card">
                <img
                  className="profile-image"
                  src={user.passporturl === null ? avatar : user.passporturl}
                  alt="avatar"
                />
                <div className="card-container">
                  <h4>
                    <b>
                      {user.firstname}
                      &nbsp;
                      {user.lastname}
                    </b>
                  </h4>
                  <p>{user.email}</p>
                  <form encType="multipart/form-data">
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <i className="fa fa-upload" />
                      Upload
                      <input
                        type="file"
                        id="file-upload"
                        onChange={this.handleChange.bind(this)}
                      />
                      <Button
                        onClick={this.uploadImage}
                        value="Upload!"
                        className="btn btn-primary user-form"
                      />
                    </label>
                  </form>
                </div>
              </div>
              <div className="user-profile-tab-section">
                <UserTab changeTab={this.changeTab} currentTab={currentTab} />
                <div className="admin-content">
                  {currentTab === 'party-section' ? (
                    <PartyList partyList={data} />
                  ) : null}
                  {currentTab === 'office-section' ? (
                    <p classNmae="user-tab-section">
                      Office section, Work in progress
                    </p>
                  ) : null}
                  {currentTab === 'apply-section' ? (
                    <p classNmae="user-tab-section">
                      Interest section, Work in progress
                    </p>
                  ) : null}
                  {currentTab === 'candidates-section' ? (
                    <p classNmae="user-tab-section">
                      Candidates section, Work in progress
                    </p>
                  ) : null}
                  {currentTab === 'vote-section' ? (
                    <p classNmae="user-tab-section">
                      Vote section, Work in progress
                    </p>
                  ) : null}
                  {currentTab === 'result-section' ? (
                    <p classNmae="user-tab-section">
                      Result section, Work in progress
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
UserProfile.defaultProps = {
  partyList: {},
};
UserProfile.propTypes = {
  fetchAllParty: PropTypes.func.isRequired,
  partyList: PropTypes.shape(),
};

export default UserProfile;
