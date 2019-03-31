import actionTypes from '../actionTypes/operations';

const initialState = {
  operations: [],
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
