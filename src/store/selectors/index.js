import { createSelector } from 'reselect';

import * as constants from '../../helpers/constants';

export const getOperations = state => state.operations.operations;

export const getPeriod = state => state.filters.period;

export const getOperationsWithPeriodIndex = createSelector(
  [getOperations, getPeriod],
  (operations, period) => {
    return operations.map(operation => {
      switch (period) {
        case constants.PERIOD_WEEK:
          return {
            ...operation,
            periodIndex: new Date(operation.timestamp).getDay(),
          };
        case constants.PERIOD_NONE:
        default:
          return operation;
      }
    });
  }
);

export const getGroupedOperations = createSelector(
  [getOperationsWithPeriodIndex, getPeriod],
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
