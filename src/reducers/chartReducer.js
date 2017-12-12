import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Revolve from '../../node_modules/ramda/src/evolve';

export default function chartReducer(state = initialState.charts, action) {  
  switch (action.type) {
    case types.LOAD_CHART_SUCCESS:
      return action.chartData;
    default:
      return state;
  }
}
