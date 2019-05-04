import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import { HomePage } from './HomePage';
import Login from './LoginPage/LoginPage';
import Layout from './Containers/Home/Layout';
import Signup from './Signup/Signup';
import NotFound from './PageNotFound/PageNotFound';
import UserProfile from './Userprofile/UserProfile';
import store from './_helpers/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Notifications />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/user"
              component={UserProfile}
              // render={() => <Layout />}
            />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="notFound" />
          </Switch>
        </Provider>
      </React.Fragment>
    );
  }
}
export default App;
