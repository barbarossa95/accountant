import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import operations from './reducers/operations';
import filters from './reducers/filters';
import user from './reducers/user';

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    operations,
    filters,
    user,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
