import * as actionTypes from '../actionTypes/user';

const initialState = {
  token: localStorage.getItem('token') || '',
  user: null,
  message: null,
  loading: false,
};

const operationHandler = {
  [actionTypes.LOGIN_REQUEST](state) {
    return {
      ...state,
      message: `Загрузка`,
      loading: true,
    };
  },
  [actionTypes.LOGIN_SUCCESS](state, { token, user }) {
    return {
      ...state,
      message: `Добро пожаловать, ${user.name}!`,
      token,
      user,
      loading: false,
    };
  },
  [actionTypes.LOGIN_FAIL](state, { message }) {
    return {
      ...state,
      token: null,
      user: null,
      message,
      loading: false,
    };
  },
  [actionTypes.AUTH_FAIL](state) {
    return {
      ...state,
      user: null,
      token: null,
      message: 'Необходима авторизация',
    };
  },
  [actionTypes.LOGOUT](state) {
    return {
      ...state,
      user: null,
      token: null,
      message: null,
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
