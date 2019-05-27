import { combineReducers } from 'redux';
import auth from './auth.reducers';
import partyList from './party.reducers';

const reducers = combineReducers({ auth, partyList });

export default reducers;
