import axios from '../../configs/axios';

import * as actionTypes from '../actionTypes/operations';

import { logout } from '../actions/user';

export const fetchOperations = () => async (dispatch, getSate) => {
  try {
    const token = getSate().user.token || '',
      res = await axios.get('/operation', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    dispatch({
      type: actionTypes.CLEAR_OPERATIONS,
      operations: res.data,
    });
    dispatch({
      type: actionTypes.FETCH_OPERATIONS,
      operations: res.data,
    });
  } catch (e) {
    if (e.request.status === 401) logout()(dispatch);
    console.error(e);
  }
};

export const addOperation = operation => async (dispatch, getSate) => {
  try {
    const token = getSate().user.token || '';
    await axios.post('/operation', operation, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: actionTypes.ADD_OPERATION,
      operation,
    });
  } catch (e) {
    if (e.request.status === 401) logout()(dispatch);
    console.error(e);
  }
};

export const removeOperation = operation => async (dispatch, getSate) => {
  try {
    const token = getSate().user.token || '';

    await axios.delete(`/operation/${operation._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: actionTypes.REMOVE_OPERATION,
      operation,
    });

    return true;
  } catch (e) {
    if (e.request.status === 401) logout()(dispatch);
    console.error(e);
    return false;
  }
};
