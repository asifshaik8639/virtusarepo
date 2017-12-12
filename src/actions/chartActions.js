import * as types from './actionTypes';
import chartApi from '../api/mockChartApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
/* eslint-disable no-console */
export function loadChartSuccess(chartData) {
 
  return { type: types.LOAD_CHART_SUCCESS, chartData };
}

export function loadChartsData() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return chartApi.getChartData().then(chartData => {          
      dispatch(loadChartSuccess(chartData));
    }).catch(error => {
      throw(error);
    });
  };
}

