import { notify } from 'react-notify-toast';
import actions from '../_constants/user.constants';
import authServices from '../_services/auth.service';
import handleErrorMessage from '../_helpers/handleErrorMessage.js';

const contentLoading = () => {
  return {
    type: actions.BEGIN_LOADING,
  };
};

const loginSuccess = token => {
  return {
    type: actions.LOGIN_SUCCESS,
    token,
  };
};

const loginSuccessAdmin = token => {
  return {
    type: actions.LOGIN_SUCCESS_ADMIN,
    token,
  };
};

const loginFailure = () => {
  return {
    type: actions.LOGIN_FAILURE,
  };
};
const signupSuccess = token => {
  return {
    type: actions.SIGNUP_SUCCESS,
    token,
  };
};

const signupFailure = () => {
  return {
    type: actions.SIGNUP_FAILURE,
  };
};

const logoutUser = () => {
  return {
    type: actions.LOGOUT,
  };
};

const login = userDetails => {
  return async dispatch => {
    dispatch(contentLoading());
    const res = await authServices.auth('login', userDetails);
    if (res.status >= 400) {
      dispatch(loginFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      localStorage.setItem('token', res.data[0].token);
      localStorage.setItem('user', JSON.stringify(res.data[0].user));
      if (res.data[0].user.isadmin) {
        dispatch(loginSuccessAdmin(res.data[0].token));
      } else {
        dispatch(loginSuccess(res.data[0].token));
      }
    }
  };
};
const signup = userDetails => {
  return async dispatch => {
    dispatch(contentLoading());
    const res = await authServices.auth('signup', userDetails);
    if (res.status >= 400) {
      dispatch(signupFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 201) {
      localStorage.setItem('token', res.data[0].token);
      localStorage.setItem('user', JSON.stringify(res.data[0].user));
      if (res.data[0].user.isadmin) {
        dispatch(signupSuccess(res.data[0].token));
      } else {
        dispatch(signupSuccess(res.data[0].token));
      }
    }
  };
};
const logout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(logoutUser());
  };
};

const authAction = { login, logout, signup };

export default authAction;
