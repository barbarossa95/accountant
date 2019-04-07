import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import operations from './reducers/operations';
import filters from './reducers/filters';

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    operations,
    filters,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
