/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-unresolved
import config from 'path';
import { authHeader } from '../_helpers';

const login = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  await fetch(
    'https://politico-software.herokuapp.com/api/v1/auth/login',
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};

const getById = id => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
};

const register = user => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(
    'https://politico-software.herokuapp.com/api/v1/auth/signup',
    requestOptions
  ).then(handleResponse);
};

const update = user => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${config}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
};

// prefixed function name with underscore because delete is a reserved word in javascript
const remove = id => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: remove,
};
