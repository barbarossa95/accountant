import axios from '../../configs/axios';
import { push } from 'connected-react-router';

import * as actionTypes from '../actionTypes/user';
import { CLEAR_OPERATIONS } from '../actionTypes/operations';

import { PAGE_HOME, PAGE_LOGIN } from '../../helpers/constants';

export const login = (username, password) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });

    const response = await axios.post('/auth/login', {
        username,
        password,
      }),
      { token, user } = response.data;

    localStorage.setItem('token', token);

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      token,
      user,
    });

    dispatch(push(PAGE_HOME));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      message: error.response.data.message,
    });

    throw error;
  }
};

export const logout = () => async dispatch => {
  localStorage.setItem('token', '');

  dispatch({
    type: CLEAR_OPERATIONS,
  });
  dispatch({
    type: actionTypes.LOGOUT,
  });
  dispatch(push(PAGE_LOGIN));
};

export const fetchUser = () => async (dispatch, getState) => {
  try {
    const {
      user: { token = '' },
    } = getState();

    if (!token) {
      logout()(dispatch);
      return;
    }

    const { data: user = null } = await axios.get('/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: actionTypes.FETCH_USER,
      user,
    });
  } catch (error) {
    logout()(dispatch);
  }
};
