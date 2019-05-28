import actionTypes from '../constants/GetInterest.constant';

const initialState = {
  fetchInterestList: [],
};

const fetchInterestList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INTEREST_SUCCESS:
      return { ...state, fetchInterestList: action.request };
    case actionTypes.FETCH_INTEREST_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default fetchInterestList;
