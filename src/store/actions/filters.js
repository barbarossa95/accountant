import actionTypes from '../actionTypes/filters';

export const setPeriod = period => async dispatch => {
  dispatch({
    type: actionTypes.SET_PERIOD,
    period,
  });
};
