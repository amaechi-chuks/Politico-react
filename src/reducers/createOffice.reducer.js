import actionTypes from '../constants/Admin.contants';

const initialState = {
  createOfficeList: [],
};

const createOfficeList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PARTY_SUCCESS:
      return { ...state, createOfficeList: action.request };
    case actionTypes.CREATE_PARTY_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default createOfficeList;
