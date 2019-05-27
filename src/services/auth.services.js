import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

export const getToken = () => localStorage.getItem(tokenKey);

export const decodeToken = () => {
  try {
    const token = getToken();
    const { userDetails } = jwtDecode(token);
    return userDetails;
  } catch (ex) {
    return null;
  }
};

export const setToken = token => localStorage.setItem(tokenKey, token);

export const removeToken = () => localStorage.removeItem(tokenKey);

export default {
  setToken,
  removeToken,
  getToken,
  decodeToken,
};
