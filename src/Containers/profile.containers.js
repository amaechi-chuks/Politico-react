import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from '../actions/party.actions';
import OfficeAction from '../actions/office.actions';
import DeclareInterestAction from '../actions/interest.actions';
import FetchInterestAction from '../actions/getInterest.actions';

const { fetchAllParty } = PartyAction;
const { fetchAllOffice } = OfficeAction;
const { declareInterest } = DeclareInterestAction;
const { fetchAllInterestdCandidate } = FetchInterestAction;
const mapStateToProps = ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
}) => ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
});

const ProfileContainer = connect(
  mapStateToProps,
  { fetchAllParty, fetchAllOffice, declareInterest, fetchAllInterestdCandidate }
)(UserProfile);

export default ProfileContainer;
