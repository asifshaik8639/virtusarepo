import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType, mergeMap, map } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators'; // rxjs v5.5+
import * as types from '../actions/actionTypes';
//This is mimic the server end point url from json place holder
const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';


const fetchUserFulfilled = payload => ({ type: types.FETCH_USER_FULFILLED, payload });

export const reduxObservableEpic = action$ =>
  action$.ofType('GET_DATA')
    .mergeMap(action =>
      ajax.getJSON(DATA_URL)
        .map(response => fetchUserFulfilled(response))
    );