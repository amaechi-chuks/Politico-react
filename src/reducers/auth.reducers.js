import actionTypes from '../constants/user.constants';

const initialState = {
  loading: false,
  isadmin: false,
  redirect: false,
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEGIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, loading: false };
    case actionTypes.LOGIN_SUCCESS_ADMIN:
      return {
        ...state,
        loading: false,
        isadmin: true,
        redirect: true,
        token: action.token,
      };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, redirect: true, token: action.token };
    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, loading: false, redirect: true, token: action.token };
    case actionTypes.SIGNUP_FAILURE:
      return { ...state, loading: false };
    case actionTypes.LOGOUT:
      return { ...state, redirect: false, isadmin: false, token: null };
    default:
      return state;
  }
};

export default auth;
