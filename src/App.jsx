import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history, store } from './_helpers';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

const App = () => (
  <div className="col-lg-12 col-lg-12">
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Router>
    </Provider>
  </div>
);

export default App;
