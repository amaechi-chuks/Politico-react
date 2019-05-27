import { combineReducers } from 'redux';
import auth from './auth.reducers';
import partyList from './party.reducers';
import officeList from './office.reducers';
import interestList from './interest.reducers';

const reducers = combineReducers({ auth, partyList, officeList, interestList });

export default reducers;
