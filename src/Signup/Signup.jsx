import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { Roller } from 'react-awesome-spinners';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Components/Global/Inputs';
import Button from '../Components/Global/Buttons';
import authAction from '../_actions/auth.actions';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../assets/style/global/spinner.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupDetatils: {
        firstName: '',
        lastName: '',
        otherName: '',
        phoneNumber: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { signupDetatils } = this.state;
    signupDetatils[target.id] = target.value;
    this.setState({ signupDetatils });
  };

  handleClick = async () => {
    const { signupDetatils } = this.state;
    const { signup } = this.props;
    signup(signupDetatils);
  };

  render() {
    const { signupDetatils } = this.state;
    const { auth } = this.props;
    const { loading, redirect, isadmin } = auth;
    return (
      <React.Fragment>
        <Notifications />
        <Header />
        <main>
          <section className="container form-container">
            <div className="spinner">{loading && <Roller />}</div>
            <h2 className="section-title1">Sign Up</h2>
            <form className="form-card">
              <Input
                autoFocus="autoFocus"
                type="text"
                id="firstName"
                label="firstName"
                name="firstName"
                className="signLabel"
                placeholder="John"
                required="required"
                value={signupDetatils.firstName}
                onChange={this.handleChange}
              />
              <Input
                autoFocus="autoFocus"
                type="text"
                id="lastName"
                label="lastName"
                name="lastName"
                className="signLabel"
                placeholder="Snow"
                required="required"
                value={signupDetatils.lastName}
                onChange={this.handleChange}
              />
              <Input
                autoFocus="autoFocus"
                type="text"
                id="otherName"
                label="otherName"
                name="otherName"
                className="signLabel"
                placeholder="Snow"
                required="required"
                value={signupDetatils.otherName}
                onChange={this.handleChange}
              />
              <Input
                type="email"
                id="email"
                label="Email"
                name="email"
                className="signLabel"
                placeholder="amaechio@gmail.com"
                required="required"
                value={signupDetatils.email}
                onChange={this.handleChange}
              />
              <Input
                type="number"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                className="signLabel"
                placeholder="0811111101"
                required="required"
                value={signupDetatils.phoneNumber}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                className="signLabel"
                placeholder="Password"
                required="required"
                value={signupDetatils.password}
                onChange={this.handleChange}
              />
              <Button
                value="Sign Up"
                id="signup"
                className="btn btn-primary2 updat"
                onClick={this.handleClick}
              />
              <div className="margin--top--10 margin--below ">
                <p className="text--primary1">
                  Already have an account?
                  <Link to="/login" className="text--color--grey">
                    login
                  </Link>
                </p>
              </div>
            </form>
          </section>
        </main>
        <Footer />
        {isadmin && redirect && <Redirect to="/admin" />}
        {!isadmin && redirect && <Redirect to="/login" />}
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};

const { signup } = authAction;

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(
  mapStateToProps,
  { signup }
)(Signup);
