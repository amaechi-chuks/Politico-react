import { notify } from 'react-notify-toast';
import actions from '../constants/user.constants';
import authServices from '../services/http.service';
import { setToken, removeToken, decodeToken } from '../services/auth.services';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

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

const signupFailure = () => {
  return {
    type: actions.SIGNUP_FAILURE,
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

export const signup = userDetails => {
  return async dispatch => {
    if (!navigator.onLine) {
      notify.show('Please check your internet connection', 'error');
    }
    dispatch(contentLoading());
    try {
      const res = await authServices.auth('signup', userDetails);
      localStorage.setItem('token', res.data[0].token);
      localStorage.setItem('user', JSON.stringify(res.data[0].user));
    } catch (ex) {
      handleErrorMessage(ex);
    } finally {
      dispatch(signupFailure());
    }
  };
};
export const logout = () => {
  removeToken();
  window.location = '/login';
};

const authAction = { login, logout, signup };

export default authAction;
