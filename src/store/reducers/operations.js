import * as actionTypes from '../actionTypes/operations';

import { calcBalance } from '../../helpers/functions';

const initialState = {
  balance: 0,
  operations: [],
};

const operationHandler = {
  [actionTypes.CLEAR_OPERATIONS](state) {
    return initialState;
  },
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

  [actionTypes.REMOVE_OPERATION](state, { operation }) {
    const operations = state.operations.filter(
      item => item._id !== operation._id
    );

    return {
      ...state,
      operations,
      balance: calcBalance(operations, 0),
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
