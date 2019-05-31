import { connect } from 'react-redux';
import UserProfile from '../Userprofile/UserProfile';
import PartyAction from '../actions/party.actions';
import adminUpdateParty from '../actions/admin.actions';
import OfficeAction from '../actions/office.actions';
import DeclareInterestAction from '../actions/interest.actions';
import FetchInterestAction from '../actions/getInterest.actions';

const { fetchAllParty } = PartyAction;
const { editParty } = adminUpdateParty;
const { fetchAllOffice } = OfficeAction;
const { declareInterest } = DeclareInterestAction;
const { fetchAllInterestdCandidate } = FetchInterestAction;
const mapStateToProps = ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
}) => ({
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
});

const ProfileContainer = connect(
  mapStateToProps,
  {
    fetchAllParty,
    fetchAllOffice,
    declareInterest,
    fetchAllInterestdCandidate,
    editParty,
  }
)(UserProfile);

export default ProfileContainer;
