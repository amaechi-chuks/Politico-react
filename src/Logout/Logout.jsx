/* eslint-disable import/no-named-as-default-member */
import authAction from '../actions/auth.actions';

const { logout } = authAction;

const Logout = () => {
  return logout();
};

export default Logout;
