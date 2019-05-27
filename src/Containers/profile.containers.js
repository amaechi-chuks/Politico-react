import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from '../actions/party.actions';
import OfficeAction from '../actions/office.actions';

const { fetchAllParty } = PartyAction;
const { fetchAllOffice } = OfficeAction;
const mapStateToProps = ({ partyList, officeList }) => ({
  partyList,
  officeList,
});

const ProfileContainer = connect(
  mapStateToProps,
  { fetchAllParty, fetchAllOffice }
)(UserProfile);

export default ProfileContainer;
