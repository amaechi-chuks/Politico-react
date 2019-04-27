/* eslint-disable no-shadow */
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';
import { history } from '../_helpers';

const login = (email, password) => {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password).then(user => {
      dispatch(success(user));
      history.push('/user');
    }).catch = err => {
      dispatch(failure(err));
      dispatch(alertActions.error('error.toString()'));
    };
  };
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const register = user => {
  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success(user));
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const getAll = () => {
  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };
};

// prefixed function name with underscore because delete is a reserved word in javascript
const remove = id => {
  return dispatch => {
    function request(id) {
      return { type: userConstants.DELETE_REQUEST, id };
    }
    function success(id) {
      return { type: userConstants.DELETE_SUCCESS, id };
    }
    function failure(id, error) {
      return { type: userConstants.DELETE_FAILURE, id, error };
    }
    dispatch(request(id));

    userService
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };
};
const getUser = id => {
  return dispatch => {
    function request(id) {
      return { type: userConstants.GET_USER_REQUEST, id };
    }
    function success(id) {
      return { type: userConstants.GET_USER_SUCCESS, id };
    }
    function failure(id, error) {
      return { type: userConstants.DGET_USER, id, error };
    }
    dispatch(request(id));

    userService
      .getUser(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };
};
export const userActions = {
  login,
  logout,
  register,
  getAll,
  getUser,
  delete: remove,
};
