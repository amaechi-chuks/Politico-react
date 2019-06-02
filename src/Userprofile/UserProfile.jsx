/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';
import UserHeader from '../Components/Global/User';
import PartyList from '../Party/PartyList/PartyList';
import OfficeList from '../Office/OfficeList/OfficeList';
import InterestForm from '../Interest/InterestForm/InterestForm';
import CreateOfficeForm from '../Office/CreateOffice/CreateOfficeForm';
import CreatePartyForm from '../Party/CreateParty/CreatePartyForm';
import InterestedList from '../InterestedCandidates/InterestedList/InterestedList';
import UserTab from '../UserTab/UserTab';
import avatar from '../assets/img/avatar.png';
import upload from '../services/upload';
import Loader from '../Components/Global/Loader';
import Button from '../Components/Global/Buttons';
import Modal from '../Components/Modals/Modal';
import './user.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      loading: false,
      currentTab: 'party-section',
      modalOpen: false,
      partyId: '',
      partyDetails: {
        name: '',
      },
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

  handlePartyName = ({ target }) => {
    const { partyDetails } = this.state;
    partyDetails[target.id] = target.value;
    this.setState({ partyDetails });
  };

  EditPartyName = async (e, id, partyData) => {
    const { editParty, fetchAllParty } = this.props;
    e.preventDefault();
    await editParty(id, partyData);
    fetchAllParty();
    this.closeModal();
  };

  handleChange = async e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ imageUrl: reader.result });
    };
  };

  uploadImage = async () => {
    this.setState({ loading: true });
    const { imageUrl } = this.state;
    const formData = new FormData();
    formData.append('passporturl', imageUrl);
    const res = await upload.uploadPic(formData);
    localStorage.setItem('user', JSON.stringify(res.data[0]));
    this.setState({ loading: false });
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = id => {
    this.setState({ modalOpen: true, partyId: id });
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const {
      loading,
      currentTab,
      modalOpen,
      partyId,
      partyDetails,
    } = this.state;
    const {
      partyList,
      officeList,
      interestList,
      createPartyList,
      createOfficeList,
      declareInterest,
      fetchInterestList,
      fetchAllParty,
      fetchAllOffice,
      fetchAllInterestdCandidate,
      editPartyList,
      createParty,
      createOffice,
    } = this.props;
    const { partyList: data } = partyList;
    const { editPartyList: editData } = editPartyList;
    const { officeList: officeData } = officeList;
    const { interestList: interestData } = interestList;
    const { fetchInterestList: interestedData } = fetchInterestList;
    const { createPartyList: createPartyListData } = createPartyList;
    const { createOfficeList: createOfficeListData } = createOfficeList;

    return (
      <React.Fragment>
        <div>
          <Notifications />
          <UserHeader />
          <section className="container">
            {loading && <Loader />}
            {user.isadmin === true ? (
              <h2 className="section-title">Admin Profile</h2>
            ) : (
              <h2 className="section-title">User Profile</h2>
            )}
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
                    <PartyList
                      partyList={data}
                      editPartyList={editData}
                      user={user}
                      modalOpen={this.openModal}
                    />
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
                  {currentTab === 'create-party-section' ? (
                    <CreatePartyForm
                      createPartyList={createPartyListData}
                      createParty={createParty}
                      fetchAllParty={fetchAllParty}
                    />
                  ) : null}
                  {currentTab === 'create-office-section' ? (
                    <CreateOfficeForm
                      createOfficeList={createOfficeListData}
                      createOffice={createOffice}
                      fetchAllOffice={fetchAllOffice}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </section>
          <Modal
            modalOpen={modalOpen}
            title="Edit Party Name"
            closeModal={this.closeModal}
            openModal={this.openModal}
          >
            <form
              className="edit-profile-form-modal"
              onSubmit={e => this.EditPartyName(e, partyId, partyDetails)}
            >
              <label htmlFor="edit-party-by-name">
                <p>Enter Party Name</p>
                <input type="text" id="name" onChange={this.handlePartyName} />
              </label>
              <div>
                <button type="submit" className="edt-btn">
                  Update
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={this.closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
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
  editPartyList: {},
  createPartyList: {},
  createOfficeList: {},
};
UserProfile.propTypes = {
  fetchAllParty: PropTypes.func.isRequired,
  fetchAllOffice: PropTypes.func.isRequired,
  editPartyList: PropTypes.shape(),
  fetchAllInterestdCandidate: PropTypes.func.isRequired,
  declareInterest: PropTypes.func.isRequired,
  createParty: PropTypes.func.isRequired,
  createOffice: PropTypes.func.isRequired,
  partyList: PropTypes.shape(),
  fetchInterestList: PropTypes.shape(),
  officeList: PropTypes.shape(),
  interestList: PropTypes.shape(),
  createPartyList: PropTypes.shape(),
  createOfficeList: PropTypes.shape(),
  editParty: PropTypes.func.isRequired,
};

export default UserProfile;
