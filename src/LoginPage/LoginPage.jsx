import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Components/Global/Loader';
import Button from '../Components/Global/Buttons';
import Input from '../Components/Global/Inputs';
import Header from '../Components/Header/Header';
import '../assets/style/global/spinner.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { loginDetails } = this.state;
    loginDetails[target.id] = target.value;
    this.setState({ loginDetails });
  };

  handleClick = async e => {
    e.preventDefault();
    const { loginDetails } = this.state;
    const { login } = this.props;
    await login(loginDetails);
  };

  render() {
    const { loginDetails } = this.state;
    const { auth } = this.props;
    const { loading, redirect } = auth;
    return (
      <React.Fragment>
        <Notifications />
        <Header />
        <main>
          <section className="container form-container">
            <div className="spinner">{loading && <Loader />}</div>
            <h2 className="section-title1">Login</h2>
            <form className="form-card">
              <Input
                autoFocus="autoFocus"
                type="text"
                id="email"
                label="Email"
                className="signLabel"
                placeholder="johndeo@gmail.com"
                required="required"
                value={loginDetails.email}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                className="signLabel"
                placeholder="Password"
                required="required"
                value={loginDetails.password}
                onChange={this.handleChange}
              />
              <div className="forgot--reset">
                <Link to="/password-reset" className="text--color--grey">
                  Forgot Password?
                </Link>
              </div>
              <Button
                value="Login"
                className="btn btn-primary user-form"
                onClick={this.handleClick}
              />
              <div className="margin--top--10 margin--below ">
                <p className="text--primary1">
                  Dont have an account?
                  <Link to="/signup" className="text--color--grey">
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </section>
        </main>
        {redirect && <Redirect to="/user-profile" />}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};
export default Login;
