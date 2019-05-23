import authAction from '../actions/auth.actions';

const { logout } = authAction;

const Logout = () => {
  return logout();
};

export default Logout;
