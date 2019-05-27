import actionTypes from '../constants/Office.constants';

const initialState = {
  officeList: [],
};

const officeList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OFFICE_SUCCESS:
      return { ...state, officeList: action.request };
    case actionTypes.FETCH_OFFICE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export default officeList;
