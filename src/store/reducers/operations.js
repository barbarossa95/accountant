import actionTypes from '../actionTypes/operations';

import { calcBalance } from '../../helpers/functions';

const initOperations = [
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().getTime(),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().getTime(),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().getTime(),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().getTime(),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().getTime(),
  },
];

const initialState = {
  balance: calcBalance(initOperations),
  operations: initOperations,
};

const operationHandler = {
  [actionTypes.ADD_OPERATION](state, { operation }) {
    const operations = [...state.operations, operation];

    return {
      ...state,
      balance: calcBalance(operations),
      operations,
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
