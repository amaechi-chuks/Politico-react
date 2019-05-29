/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';
import UserHeader from '../Components/Global/User';
import PartyList from '../Party/PartyList/PartyList';
import OfficeList from '../Office/OfficeList/OfficeList';
import InterestForm from '../Interest/InterestForm/InterestForm';
import InterestedList from '../InterestedCandidates/InterestedList/InterestedList';
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
    const {
      fetchAllParty,
      fetchAllOffice,
      fetchAllInterestdCandidate,
    } = this.props;
    fetchAllParty();
    fetchAllOffice();
    fetchAllInterestdCandidate();
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
    const res = await upload.uploadPic(formData);
    localStorage.setItem('user', JSON.stringify(res.data[0]));
    this.setState({ loading: true });
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { loading, currentTab } = this.state;
    const {
      partyList,
      officeList,
      interestList,
      declareInterest,
      fetchInterestList,
      fetchAllInterestdCandidate,
    } = this.props;
    const { partyList: data } = partyList;
    const { officeList: officeData } = officeList;
    const { interestList: interestData } = interestList;
    const { fetchInterestList: interestedData } = fetchInterestList;
    return (
      <React.Fragment>
        {loading && <Loader />}
        <div>
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
                  <div className="user-details">
                    <h4>
                      <b className="user-names">
                        {user.firstname}
                        &nbsp;
                        {user.lastname}
                      </b>
                    </h4>
                    <p className="user-email">{user.email}</p>
                  </div>

                  <form encType="multipart/form-data">
                    <label
                      htmlFor="file-upload"
                      className="custom-file-upload upload-label"
                    >
                      <i className="fa fa-upload" />
                      Choose image
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
                    <OfficeList officeList={officeData} />
                  ) : null}
                  {currentTab === 'apply-section' ? (
                    <InterestForm
                      interestList={interestData}
                      declareInterest={declareInterest}
                      partyList={partyList}
                      officeList={officeList}
                    />
                  ) : null}
                  {currentTab === 'candidates-section' ? (
                    <InterestedList
                      fetchInterestList={interestedData}
                      fetchAllInterestdCandidate={fetchAllInterestdCandidate}
                    />
                  ) : null}
                  {currentTab === 'vote-section' ? (
                    <p classNmae="user-tab-section">
                      <p>Vote section, Work in progress</p>
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
  officeList: {},
  interestList: {},
  fetchInterestList: {},
};
UserProfile.propTypes = {
  fetchAllParty: PropTypes.func.isRequired,
  fetchAllOffice: PropTypes.func.isRequired,
  fetchAllInterestdCandidate: PropTypes.func.isRequired,
  declareInterest: PropTypes.func.isRequired,
  partyList: PropTypes.shape(),
  fetchInterestList: PropTypes.shape(),
  officeList: PropTypes.shape(),
  interestList: PropTypes.shape(),
};

export default UserProfile;
