import { alertConstants, userConstants } from '../_constants';

const initialState = {
  loginSuccess: null,
  loginError: null,
  load: false,
};

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        // type: 'alert-success',
        loginSuccess: action.user,
        load: false,
      };
    // case alertConstants.ERROR:
    //   return {
    //     type: 'alert-danger',
    //     message: action.message,
    //   };
    // case alertConstants.CLEAR:
    //   return {};
    case userConstants.LOGIN_FAILURE:
      return {
        // type: 'alert-danger',
        loginError: action.error,
        load: false,
      };
    default:
      return state;
  }
};
