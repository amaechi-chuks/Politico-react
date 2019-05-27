import actionTypes from '../constants/Party.constants';

const initialState = {
  partyList: [],
};

const partyList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARTY_SUCCESS:
      return { ...state, partyList: action.request };
    case actionTypes.FETCH_PARTY_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default partyList;
