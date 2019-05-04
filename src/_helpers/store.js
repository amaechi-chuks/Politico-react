// import { createStore, compose, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import reducers from '../_reducers';

// const loggerMiddleware = createLogger();

// export default createStore(
//   reducers,
//   compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../_reducers';

export default createStore(reducers, compose(applyMiddleware(thunk)));
