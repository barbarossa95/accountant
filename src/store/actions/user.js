import axios from '../../configs/axios';

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

    return response.data;
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      message: error.response.data.message,
    });

    throw error;
  }
};
