import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from '../actions/party.actions';
import OfficeAction from '../actions/office.actions';
import DeclareInterestAction from '../actions/interest.actions';

const { fetchAllParty } = PartyAction;
const { fetchAllOffice } = OfficeAction;
const { declareInterest } = DeclareInterestAction;
const mapStateToProps = ({ partyList, officeList, interestList }) => ({
  partyList,
  officeList,
  interestList,
});

const ProfileContainer = connect(
  mapStateToProps,
  { fetchAllParty, fetchAllOffice, declareInterest }
)(UserProfile);

export default ProfileContainer;
