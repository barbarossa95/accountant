import React from 'react';

import OperationList from '../components/OperationList';
import OperationWeek from '../components/OperationWeek';
import * as constants from '../helpers/constants';

const TimeTable = ({ operations, filters }) => {
  switch (filters.period) {
    case constants.PERIOD_WEEK:
      return <OperationWeek operations={operations} />;
    case constants.PERIOD_NONE:
    default:
      return <OperationList operations={operations} />;
  }
};

export default TimeTable;
