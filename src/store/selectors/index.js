import { createSelector } from 'reselect';

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
          let weekIndex = new Date(operation.timestamp);
          weekIndex = Math.floor(
            weekIndex.getTime() / (1000 * 60 * 60 * 24 * 7)
          );

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
