import actionTypes from '../actionTypes/operations';

export const addOperation = operation => async dispatch => {
  dispatch({
    type: actionTypes.ADD_OPERATION,
    operation,
  });
};
