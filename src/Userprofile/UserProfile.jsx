/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import UserHeader from '../Components/Global/User';
import avatar from '../assets/img/avatar.png';
import upload from '../services/upload';
import Loader from '../Components/Global/Loader';
import ProfileTable from './ProfileTable';
import Button from '../Components/Global/Buttons';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      loading: false,
    };
  }

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

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { loading } = this.state;
    return (
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
                <p>{user.phonenumber}</p>
                <p>{user.email}</p>
                <form encType="multipart/form-data">
                  <p>Change Profile Picture:</p>
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
            <ProfileTable />
          </div>
        </section>
      </div>
    );
  }
}

UserProfile.propTypes = {};

export default UserProfile;
