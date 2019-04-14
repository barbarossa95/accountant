import actionTypes from '../actionTypes/operations';

import { calcBalance } from '../../helpers/functions';

const initialState = {
  balance: 0,
  operations: [],
};

const operationHandler = {
  [actionTypes.FETCH_OPERATIONS](state, { operations }) {
    const oldBalance = state.balance,
      balance = calcBalance(operations, oldBalance);

    return {
      ...state,
      balance,
      operations,
    };
  },

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
