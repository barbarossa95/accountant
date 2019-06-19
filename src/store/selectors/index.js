import { createSelector } from 'reselect';

import moment from 'moment';

import * as constants from '../../helpers/constants';
import { sortOperations } from '../../helpers/functions';

export const getOperations = state => state.operations.operations;

export const getPeriod = state => state.filters.period;

export const getGroupedOperations = createSelector(
  [getOperations, getPeriod],
  (operations, period) => {
    switch (period) {
      case constants.PERIOD_WEEK:
        return operations.reduce((groups, operation) => {
          let weekIndex = moment(operation.timestamp).format('YYYY[W]WW	'); // 2013W06 format

          groups[weekIndex] = groups[weekIndex] || [];
          groups[weekIndex].push(operation);

          return groups;
        }, {});
      case constants.PERIOD_NONE:
      default:
        return operations;
    }
  }
);

export const getSortedOperations = createSelector(
  [getGroupedOperations, getPeriod],
  (operations, period) => {
    switch (period) {
      case constants.PERIOD_WEEK:
        Object.entries(operations).forEach(([week, operationsInWeek]) => {
          operations[week] = operationsInWeek.sort(sortOperations);
        });
        return operations;
      case constants.PERIOD_NONE:
      default:
        return operations.sort(sortOperations);
    }
  }
);

export const getBalance = state => state.operations.balance;

export const getUserState = state => state.user;

export const getAccessToken = createSelector(
  [getUserState],
  state => state.token
);

export const getLoginLoading = createSelector(
  [getUserState],
  state => state.loading
);

export const getLoginMessage = createSelector(
  [getUserState],
  state => state.message || ''
);

export const getUser = createSelector(
  [getUserState],
  state => (!state.user ? null : state.user)
);

export const getUserName = createSelector(
  [getUser],
  user => (!user ? 'username' : user.name)
);

export const getUserToken = createSelector(
  [getUserState],
  state => (!state.token ? null : state.token)
);
