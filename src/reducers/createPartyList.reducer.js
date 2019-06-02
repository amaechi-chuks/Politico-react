import actionTypes from '../constants/Admin.contants';

const initialState = {
  createPartyList: [],
};

const createPartyList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PARTY_SUCCESS:
      return { ...state, createPartyList: action.request };
    case actionTypes.CREATE_PARTY_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default createPartyList;
