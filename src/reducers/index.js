import { combineReducers } from 'redux';
import auth from './auth.reducers';
import partyList from './party.reducers';
import officeList from './office.reducers';
import interestList from './interest.reducers';
import fetchInterestList from './getInterest.reducer';
import editPartyList from './editParty.reducers';
import createPartyList from './createPartyList.reducer';
import createOfficeList from './createOffice.reducer';

const reducers = combineReducers({
  auth,
  partyList,
  officeList,
  interestList,
  fetchInterestList,
  editPartyList,
  createPartyList,
  createOfficeList,
});

export default reducers;
