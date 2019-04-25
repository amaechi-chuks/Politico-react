/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import loading from '../assets/img/loading.gif';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  handleChange = event => {
    event.preventDefault();
    const user = {};
    const formData = new FormData(event.target);
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of formData.entries()) {
      const [keys, values] = entry;
      user[keys] = values;
    }
    const { dispatch } = this.props;
    dispatch(userActions.register(user));
  };

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div>
        <Header />
        <main>
          <section className="container form-container">
            <h2 className="section-title1">Sign Up</h2>
            <form className="form-card" onSubmit={this.handleChange}>
              <div
                className={`form-group${
                  submitted && !user.lastName ? ' has-error' : ''
                }`}
              >
                <label htmlFor="firstname">
                  FirstName
                  <span>*</span>
                  <input
                    type="firstname"
                    id="firstname"
                    name="firstName"
                    className="form-element"
                  />
                </label>
                {submitted && !user.lastName && (
                  <div className="help-block">Last Name is required</div>
                )}
              </div>
              <div
                className={`form-group${
                  submitted && !user.lastName ? ' has-error' : ''
                }`}
              >
                <label htmlFor="lastname">
                  Last name
                  <span>*</span>
                  <input
                    type="text"
                    id="lastname"
                    name="lastName"
                    className="form-element"
                  />
                </label>
                {submitted && !user.lastName && (
                  <div className="help-block">Last Name is required</div>
                )}
              </div>

              <div
                className={`form-group${
                  submitted && !user.otherName ? ' has-error' : ''
                }`}
              >
                <label htmlFor="othername">
                  Other name
                  <input
                    type="text"
                    id="othername"
                    name="otherName"
                    className="form-element"
                  />
                </label>
                {submitted && !user.otherName && (
                  <div className="help-block">Other Name is required</div>
                )}
              </div>
              <div
                className={`form-group${
                  submitted && !user.email ? ' has-error' : ''
                }`}
              >
                <label htmlFor="email">
                  Email Address
                  <span>*</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-element"
                  />
                </label>
                {submitted && !user.email && (
                  <div className="help-block">Email is required</div>
                )}
              </div>

              <div
                className={`form-group${
                  submitted && !user.phoneNumber ? ' has-error' : ''
                }`}
              >
                <label htmlFor="phonenumber">
                  Phone Number
                  <input
                    type="number"
                    id="phonenumber"
                    name="phoneNumber"
                    className="form-element"
                  />
                </label>
                {submitted && !user.phoneNumber && (
                  <div className="help-block">Phone Number is required</div>
                )}
              </div>

              <div
                className={`form-group${
                  submitted && !user.password ? ' has-error' : ''
                }`}
              >
                <label htmlFor="password">
                  Password
                  <span>*</span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-element"
                  />
                </label>
                {submitted && !user.password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>
              <button
                type="submit"
                id="signup"
                className="btn btn-primary2 updat"
              >
                Register
              </button>
              {registering && (
                <img
                  style={{ height: 100, width: 100, alignItems: 'center' }}
                  src={loading}
                  alt="loading"
                />
              )}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { registering } = state.registration;
  return {
    registering,
  };
};

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
