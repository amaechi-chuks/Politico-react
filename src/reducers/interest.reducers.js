import actionTypes from '../constants/Interest.constant';

const initialState = {
  interestList: [],
};

const interestList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_INTEREST_SUCCESS:
      return { ...state, interestList: action.request };
    case actionTypes.POST_INTEREST_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default interestList;
