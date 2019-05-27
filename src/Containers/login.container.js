import { connect } from 'react-redux';
import authAction from '../actions/auth.actions';
import Login from '../LoginPage/LoginPage';

const { login } = authAction;
const mapStateToProps = auth => auth;

const LoginContainer = connect(
  mapStateToProps,
  { login }
)(Login);

export default LoginContainer;
