import actionTypes from '../actionTypes/filters';

import { PERIOD_WEEK } from '../../helpers/constants';

const initialState = {
  period: PERIOD_WEEK,
};

const filtersHandler = {
  [actionTypes.SET_PERIOD](state, { period }) {
    return {
      ...state,
      period,
    };
  },
};

export default (state = initialState, action) =>
  filtersHandler[action.type]
    ? filtersHandler[action.type](state, action)
    : state;
