import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import Input from '../Components/Global/Inputs';
import Loader from '../Components/Global/Loader';
import Button from '../Components/Global/Buttons';
import authServices from '../_services/auth.service';
import handleErrorMessage from '../_helpers/handleErrorMessage.js';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

class RegisterPage extends Component {
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
      loading: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { signupDetatils } = this.state;
    signupDetatils[target.id] = target.value;
    this.setState({ signupDetatils });
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const { signupDetatils } = this.state;
    const user = await authServices.auth('signup', signupDetatils);
    if (user.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(user.error), 'error');
    }

    if (user.status === 201) {
      this.setState({ loading: true });
      localStorage.setItem('token', user.data[0].token);
      localStorage.setItem('user', JSON.stringify(user.data[0].user));
      this.setState({ redirect: true });
    }
  };

  render() {
    const { signupDetatils, loading, redirect } = this.state;

    return (
      <React.Fragment>
        <Notifications />
        {loading && <Loader />}
        <Header />
        <main>
          <section className="container form-container">
            <h2 className="section-title1">Sign Up</h2>
            <form className="form-card" onSubmit={this.handleChange}>
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
        {redirect && <Redirect to="/login" />}
      </React.Fragment>
    );
  }
}

export default RegisterPage;
