import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

export const getToken = () => {
  localStorage.getItem(tokenKey);
  return tokenKey;
};

export const decodeToken = () => {
  try {
    const token = getToken();
    const { userDetails } = jwtDecode(token);
    return userDetails;
  } catch (ex) {
    return null;
  }
};

export const setToken = token => {
  localStorage.setItem(tokenKey, token);
  return getToken();
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
  return null;
};

export default {
  setToken,
  removeToken,
  getToken,
  decodeToken,
};
