import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
/* eslint-disable no-console */

export function getReduxSagaData() { 
  console.log('entered into the getReduxSagaData actions ');    
  return { type: types.FETCH_ASYNC_SAGA_DATA };
}
