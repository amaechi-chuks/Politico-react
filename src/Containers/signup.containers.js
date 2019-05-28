import { connect } from 'react-redux';
import authAction from '../actions/auth.actions';
import Signup from '../Signup/Signup';

const { signup } = authAction;
const mapStateToProps = auth => auth;

const SignupContainer = connect(
  mapStateToProps,
  { signup }
)(Signup);

export default SignupContainer;
