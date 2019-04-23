/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import '../assets/style/buttons.css';
import '../assets/style/howItWorks.css';
import loading from '../assets/img/loading.gif';
import Header from '../components/Header/Header';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div>
        <Header />
        <main>
          <section className="container form-container">
            <h2 className="section-title1">Login</h2>
            <form className="form-card" onSubmit={this.handleSubmit}>
              <div className={submitted && !email ? ' has-error' : ''}>
                <label htmlFor="email">
                  Email Address
                  <span>*</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-element"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
                {submitted && !email && (
                  <div className="help-block">email is required</div>
                )}
              </div>
              <div className={submitted && !password ? ' has-error' : ''}>
                <label htmlFor="password">
                  Password
                  <span>*</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-element"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
                {submitted && !password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>
              <div className="forgot--reset">
                <Link to="/password-reset" className="text--color--grey">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="btn btn-primary user-form">
                Login
              </button>
              {loggingIn && (
                <img
                  style={{ height: 100, width: 100, alignItems: 'center' }}
                  src={loading}
                  alt="loading"
                />
              )}
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
};

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
