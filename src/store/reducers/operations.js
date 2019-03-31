import actionTypes from '../actionTypes/operations';

const initialState = {
  balance: 0,
  operations: [
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
  ],
};

const operationHandler = {
  [actionTypes.ADD_OPERATION](state, { operation }) {
    return {
      operations: [...state.operations, operation],
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
