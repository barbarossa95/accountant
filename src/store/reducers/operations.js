import * as actionTypes from '../actionTypes/operations';

import { calcBalance } from '../../helpers/functions';

const initialState = {
  balance: 0,
  operations: [],
  isAdding: false,
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

  [actionTypes.ADDING_OPERATION](state) {
    return {
      ...state,
      isAdding: true,
    };
  },

  [actionTypes.ADDED_OPERATION](state, { operation }) {
    const operations = [...state.operations, operation],
      { balance } = state;

    return {
      ...state,
      operations,
      balance: calcBalance([operation], balance),
      isAdding: false,
    };
  },

  [actionTypes.ADD_OPERATION_FAIL](state) {
    return {
      ...state,
      isAdding: false,
    };
  },

  [actionTypes.REMOVING_OPERATION](state, { operation }) {
    const operations = state.operations.map(item => {
      if (item._id !== operation._id) return item;
      return { ...item, removing: true };
    });

    return {
      ...state,
      operations,
    };
  },

  [actionTypes.REMOVED_OPERATION](state, { operation }) {
    const operations = state.operations.filter(
      item => item._id !== operation._id
    );

    return {
      ...state,
      operations,
      balance: calcBalance(operations, 0),
    };
  },

  [actionTypes.REMOVE_OPERATION_FAIL](state, { operation }) {
    const operations = state.operations.map(item => {
      if (item._id !== operation._id) return item;
      return { ...item, removing: false };
    });

    return {
      ...state,
      operations,
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
