import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from './party.actions';

const { fetchAllParty } = PartyAction;
const mapStateToProps = ({ partyList }) => ({
  partyList,
});

const ProfileContainer = connect(
  mapStateToProps,
  { fetchAllParty }
)(UserProfile);

export default ProfileContainer;
