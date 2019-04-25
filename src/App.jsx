import React from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { history, store } from './_helpers';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import NotFound from './PageNotFound/PageNotFound';

const App = () => (
  <BrowserRouter>
    <div className="col-lg-12 col-lg-12">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="notFound" />
          </Switch>
        </Router>
      </Provider>
    </div>
  </BrowserRouter>
);

export default App;
