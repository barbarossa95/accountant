import axios from '../../configs/axios';
import { push } from 'connected-react-router';

import * as actionTypes from '../actionTypes/user';
import { CLEAR_OPERATIONS } from '../actionTypes/operations';

import { PAGE_HOME } from '../../helpers/constants';

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
};
