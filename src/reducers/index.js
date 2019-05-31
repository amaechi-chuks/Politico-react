import { combineReducers } from 'redux';
import auth from './auth.reducers';
import partyList from './party.reducers';
import officeList from './office.reducers';
import interestList from './interest.reducers';
import fetchInterestList from './getInterest.reducer';
import editPartyList from './editParty.reducers';

const reducers = combineReducers({
  auth,
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
});

export default reducers;
