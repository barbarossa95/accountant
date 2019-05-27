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

export const getUser = state => state.user.user;

export const getToken = state => state.user.token;

export const getLoginMessage = state => state.user.message;
