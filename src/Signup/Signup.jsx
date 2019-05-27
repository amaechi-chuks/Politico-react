/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Components/Global/Inputs';
import Loader from '../Components/Global/Loader';
import Button from '../Components/Global/Buttons';
import Header from '../Components/Header/Header';
import '../assets/style/global/spinner.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupDetails: {
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
    const { signupDetails } = this.state;
    signupDetails[target.id] = target.value;
    this.setState({ signupDetails });
  };

  handleClick = () => {
    const { signupDetails } = this.state;
    const { signup } = this.props;
    signup(signupDetails);
  };

  render() {
    const { signupDetails } = this.state;
    const { auth } = this.props;
    const { loading, redirect } = auth;
    return (
      <React.Fragment>
        <Notifications />
        <Header />
        <main>
          <section className="container form-container">
            <div className="spinner">{loading && <Loader />}</div>
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
                value={signupDetails.firstName}
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
                value={signupDetails.lastName}
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
                value={signupDetails.otherName}
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
                value={signupDetails.email}
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
                value={signupDetails.phoneNumber}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                className="signLabel"
                placeholder="Password"
                required="required"
                value={signupDetails.password}
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
        {redirect && <Redirect to="/login" />}
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};
export default Signup;
