import actionTypes from '../actionTypes/user';

const initialState = {
  token: null,
  user: null,
  message: null,
};

const operationHandler = {
  [actionTypes.LOGIN_FAIL](state, { message }) {
    return {
      ...state,
      token: null,
      user: null,
      message,
    };
  },
  [actionTypes.LOGIN_SUCCESS](state, { token, user }) {
    return {
      ...state,
      message: `Добро пожаловать, ${user.name}!`,
      token,
      user,
    };
  },
};

export default (state = initialState, action) =>
  operationHandler[action.type]
    ? operationHandler[action.type](state, action)
    : state;
