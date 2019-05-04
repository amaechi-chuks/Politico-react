import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { Roller } from 'react-awesome-spinners';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Components/Global/Buttons';
import Input from '../Components/Global/Inputs';
import authAction from '../_actions/auth.actions';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../assets/style/global/spinner.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetatils: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { loginDetatils } = this.state;
    loginDetatils[target.id] = target.value;
    this.setState({ loginDetatils });
  };

  handleClick = () => {
    const { loginDetatils } = this.state;
    const { login } = this.props;
    login(loginDetatils);
  };

  render() {
    const { loginDetatils } = this.state;
    const { auth } = this.props;
    const { loading, redirect, isadmin } = auth;

    return (
      <React.Fragment>
        <Notifications />
        <Header />
        <main>
          <section className="container form-container">
            <div className="spinner">{loading && <Roller />}</div>
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
                value={loginDetatils.email}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                className="signLabel"
                placeholder="Password"
                required="required"
                value={loginDetatils.password}
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
                  <Link to="/register" className="text--color--grey">
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </section>
        </main>
        <Footer />
        {isadmin && redirect && <Redirect to="/admin" />}
        {!isadmin && redirect && <Redirect to="/user" />}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};

const { login } = authAction;

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(
  mapStateToProps,
  { login }
)(Login);
