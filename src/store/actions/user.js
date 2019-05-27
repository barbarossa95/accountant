import axios from '../../configs/axios';
import { push } from 'connected-react-router';

import actionTypes from '../actionTypes/user';

export const login = (username, password) => async dispatch => {
  try {
    const response = await axios.post('/auth/login', {
        username,
        password,
      }),
      { token, user } = response.data;

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      token,
      user,
    });

    setTimeout(() => dispatch(push('/')), 1500);

    return response.data;
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      message: error.response.data.message,
    });

    throw error;
  }
};
