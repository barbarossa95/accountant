import actionTypes from '../actionTypes/operation';

export const addOperation = operation => async dispatch => {
  dispatch({
    type: '',
    operation,
  });
};
