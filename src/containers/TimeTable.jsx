import React, { Component } from 'react';

import OperationList from '../components/OperationList';
import { OPERATION_CREDIT, OPERATION_DEBIT } from '../helpers/constants';

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: [
        {
          type: OPERATION_DEBIT,
          amount: 100,
          description: 'test',
          timestamp: new Date().getTime(),
        },
        {
          type: OPERATION_CREDIT,
          amount: 20,
          description: 'test',
          timestamp: new Date().getTime(),
        },
        {
          type: OPERATION_CREDIT,
          amount: 20,
          description: 'test',
          timestamp: new Date().getTime(),
        },
        {
          type: OPERATION_CREDIT,
          amount: 20,
          description: 'test',
          timestamp: new Date().getTime(),
        },
        {
          type: OPERATION_CREDIT,
          amount: 20,
          description: 'test',
          timestamp: new Date().getTime(),
        },
      ],
    };
  }

  render() {
    const { operations } = this.state;
    return <OperationList operations={operations} />;
  }
}

export default TimeTable;
