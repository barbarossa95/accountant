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
    if (e.request && e.request.status === 401) logout()(dispatch);
    console.error(e);
  }
};

export const addOperation = newOperation => async (dispatch, getSate) => {
  try {
    dispatch({
      type: actionTypes.ADDING_OPERATION,
    });
    const token = getSate().user.token || '';
    const { data: operation } = await axios.post('/operation', newOperation, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: actionTypes.ADDED_OPERATION,
      operation,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.ADD_OPERATION_FAIL,
    });
    if (e.request && e.request.status === 401) logout()(dispatch);
    console.error(e);
  }
};

export const removeOperation = operation => async (dispatch, getSate) => {
  try {
    dispatch({
      type: actionTypes.REMOVING_OPERATION,
      operation,
    });

    const token = getSate().user.token || '';

    await axios.delete(`/operation/${operation._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: actionTypes.REMOVED_OPERATION,
      operation,
    });

    return true;
  } catch (e) {
    dispatch({
      type: actionTypes.REMOVE_OPERATION_FAIL,
      operation,
    });
    if (e.request && e.request.status === 401) logout()(dispatch);
    console.error(e);
    return false;
  }
};
