import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history)))
);
