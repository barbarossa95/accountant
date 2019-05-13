import axios from '../../configs/axios';

import actionTypes from '../actionTypes/operations';

export const fetchOperations = () => async dispatch => {
  const res = await axios.get('/operation');

  if (res.status !== 200) {
    console.error(res);

    return;
  }

  dispatch({
    type: actionTypes.FETCH_OPERATIONS,
    operations: res.data,
  });
};

export const addOperation = operation => async dispatch => {
  const res = await axios.post('/operation', operation);

  if (res.status !== 200) {
    console.error(res);

    return;
  }

  dispatch({
    type: actionTypes.ADD_OPERATION,
    operation,
  });
};

export const removeOperation = operation => async dispatch => {
  const res = await axios.delete(`/operation/${operation.key}`);

  if (res.status !== 204) {
    console.error(res);

    return false;
  }

  dispatch({
    type: actionTypes.REMOVE_OPERATION,
    operation,
  });

  return true;
};
