import actionTypes from '../constants/Admin.contants';

const initialState = {
  editPartyList: [],
  deletePartyList: [],
};

const editPartyList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PARTY_SUCCESS:
      return { ...state, editPartyList: action.request };
    case actionTypes.UPDATE_PARTY_FAILURE:
      return { ...state };
    case actionTypes.DELETE_PARTY_SUCCESS: {
      return {
        ...state,
        deletePartyList: action.partyId,
      };
    }

    case actionTypes.DELETE_PARTY_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default editPartyList;
