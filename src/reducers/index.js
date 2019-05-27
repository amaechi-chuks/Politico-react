import { combineReducers } from 'redux';
import auth from './auth.reducers';
import partyList from './party.reducers';
import officeList from './office.reducers';

const reducers = combineReducers({ auth, partyList, officeList });

export default reducers;
