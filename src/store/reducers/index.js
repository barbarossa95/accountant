import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import operations from './operations';
import filters from './filters';
import user from './user';

export default history =>
  combineReducers({
    router: connectRouter(history),
    operations,
    filters,
    user,
  });
