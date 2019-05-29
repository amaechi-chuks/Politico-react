import { notify } from 'react-notify-toast';
import actions from '../constants/user.constants';
import authServices from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const contentLoading = () => {
  return {
    type: actions.BEGIN_LOADING,
  };
};

export const loginSuccess = token => {
  return {
    type: actions.LOGIN_SUCCESS,
    token,
  };
};
export const loginSuccessAdmin = token => {
  return {
    type: actions.LOGIN_SUCCESS_ADMIN,
    token,
  };
};

export const loginFailure = () => {
  return {
    type: actions.LOGIN_FAILURE,
  };
};

export const signupFailure = () => {
  return {
    type: actions.SIGNUP_FAILURE,
  };
};
export const signupSuccess = token => {
  return {
    type: actions.SIGNUP_SUCCESS,
    token,
  };
};
const login = userDetails => {
  if (!navigator.onLine) {
    return notify.show('Please check your internet connection', 'error');
  }
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
  if (!navigator.onLine) {
    return notify.show('Please check your internet connection', 'error');
  }
  return async dispatch => {
    dispatch(contentLoading());
    const res = await authServices.auth('signup', userDetails);
    if (res.status >= 400) {
      dispatch(loginFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }
    if (res.status === 201) {
      localStorage.setItem('token', res.data[0].token);
      localStorage.setItem('user', JSON.stringify(res.data[0].user));
      if (res.data[0].user) {
        dispatch(loginSuccess(res.data[0].token));
      }
    }
  };
};
export const logout = () => {
  localStorage.clear();
  window.location = '/login';
};

const authAction = { login, logout, signup };

export default authAction;
