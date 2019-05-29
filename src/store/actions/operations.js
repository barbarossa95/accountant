import axios from '../../configs/axios';

import actionTypes from '../actionTypes/operations';
import { AUTH_FAIL } from '../actionTypes/user';

export const fetchOperations = () => async (dispatch, getSate) => {
  try {
    const token = getSate().user.token || '',
      res = await axios.get('/operation', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    dispatch({
      type: actionTypes.FETCH_OPERATIONS,
      operations: res.data,
    });
  } catch (e) {
    if (e.request.status !== 200) {
      console.error(e);
    }
    if (e.request.status === 401) {
      dispatch({
        type: AUTH_FAIL,
      });
    }
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
    if (e.request.status !== 200) {
      console.error(e);
    }
    if (e.request.status === 401) {
      dispatch({
        type: AUTH_FAIL,
      });
    }
  }
};

export const removeOperation = operation => async (dispatch, getSate) => {
  try {
    const token = getSate().user.token || '';

    await axios.delete(`/operation/${operation.key}`, {
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
    if (e.request.status !== 200) {
      console.error(e);
    }
    if (e.request.status === 401) {
      dispatch({
        type: AUTH_FAIL,
      });
    }

    return false;
  }
};
