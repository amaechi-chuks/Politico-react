import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from '../actions/party.actions';
import adminUpdateParty from '../actions/admin.actions';
import OfficeAction from '../actions/office.actions';
import DeclareInterestAction from '../actions/interest.actions';
import FetchInterestAction from '../actions/getInterest.actions';

const { fetchAllParty } = PartyAction;
const { editParty, createParty, createOffice, deleteParty } = adminUpdateParty;
const { fetchAllOffice } = OfficeAction;
const { declareInterest } = DeclareInterestAction;
const { fetchAllInterestdCandidate } = FetchInterestAction;
const mapStateToProps = ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
  createPartyList,
  createOfficeList,
}) => ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
  createPartyList,
  createOfficeList,
});

const ProfileContainer = connect(
  mapStateToProps,
  {
    fetchAllParty,
    fetchAllOffice,
    declareInterest,
    fetchAllInterestdCandidate,
    editParty,
    createParty,
    createOffice,
    deleteParty,
  }
)(UserProfile);

export default ProfileContainer;
