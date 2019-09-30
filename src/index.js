import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';

const logger = createLogger();
// const middlewares = [logger, thunkMiddleware];

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change this is'nt a test this is a man and my wrists are hurting and i don't now what to do.
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
