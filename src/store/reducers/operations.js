import actionTypes from '../actionTypes/operations';

import { calcBalance } from '../../helpers/functions';

const initOperations = [
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_DEBIT',
    amount: 100,
    description: 'test',
    timestamp: new Date().setDate(1),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(3),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(8),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(9),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(16),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(21),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(25),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(29),
  },
  {
    type: 'OPERATION_CREDIT',
    amount: 20,
    description: 'test',
    timestamp: new Date().setDate(30),
  },
];

const initialState = {
  balance: calcBalance(initOperations),
  operations: initOperations,
};

const operationHandler = {
  [actionTypes.ADD_OPERATION](state, { operation }) {
    const operations = [...state.operations, operation],
      { balance } = state;

    return {
      ...state,
      operations,
      balance: calcBalance([operation], balance),
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
