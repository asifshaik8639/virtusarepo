import * as types from './actionTypes';
/*import chartApi from '../api/mockChartApi';*/
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
/* eslint-disable no-console */
export function getObservableData() { 
  console.log('entered into the ping actions ');    
  return { type: types.GET_DATA };
}
