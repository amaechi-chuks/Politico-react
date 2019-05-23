import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import { HomePage } from './HomePage';
import Login from './LoginPage/LoginPage';
import Logout from './Logout/Logout';
import Candidates from './Candidates/Candidates';
import Signup from './Signup/Signup';
import NotFound from './PageNotFound/PageNotFound';
import UserProfile from './Userprofile/UserProfile';
import store from './helpers/store';
import Footer from './Components/Footer/Footer';

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
            <Route path="/logout" component={Logout} />
            <Route path="/view-more-candidate" component={Candidates} />
            <Route path="/user" component={UserProfile} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="notFound" />
          </Switch>
        </Provider>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
