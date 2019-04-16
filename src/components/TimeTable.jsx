import React, { useEffect } from 'react';

import OperationList from '../components/OperationList';
import OperationWeek from '../components/OperationWeek';
import * as constants from '../helpers/constants';

const TimeTable = ({
  operations,
  filters,
  fetchOperations,
  removeOperation,
}) => {
  useEffect(() => {
    fetchOperations();
  }, fetchOperations);

  const handlers = {
    editHandler: operation => console.log(operation),
    removeHandler: removeOperation,
  };

  switch (filters.period) {
    case constants.PERIOD_WEEK:
      return <OperationWeek operations={operations} handlers={handlers} />;
    case constants.PERIOD_NONE:
    default:
      return <OperationList operations={operations} handlers={handlers} />;
  }
};

export default TimeTable;
