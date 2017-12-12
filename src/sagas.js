import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects';
import request from 'axios';

export function* sagaStarterMessage() {
  console.log('Hello Sagas starterMessage!');
}

function* fetchAsyncSagaData() {
   // use the call Effect
  yield call(delay, 1000);
  // Dispatches this action once started
  yield put({ type: 'FETCH_SAGA_INITIATED'});

  try {
    // config for fetching details API
    const detailsApiConfig = {
      //to avoid cross origin security issues in chrome hardcoded to local url, else keep '*'  
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000/reduxsaga'},
      method: 'get',
      url: 'http://jsonplaceholder.typicode.com/posts/1/comments'
    };
    // Blocks the code at this line till it is executed
    const userDetails = yield call(request, detailsApiConfig);
      
      //GET THE POST ID HERE 

    // config for fetching details API
    const asyncSagaApiConfig = {
    //to avoid cross origin security issues in chrome hardcoded to local url, else keep '*' 
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000/reduxsaga'},
      method: 'get',
      url: `http://jsonplaceholder.typicode.com/comments?postId=1`
    };

    // Fetches all restuarants
    const resultData = yield call(request, asyncSagaApiConfig);

    // On success dispatch the restaurants
    yield put({
      type: 'FETCH_SAGA_DATA_SUCCESS',
      payload: {
        resultData
      }
    });

  } catch (e) {
    // On error dispatch the error message
    yield put({
      type: 'FETCH_SAGA_DATA_ERROR',
      payload: {
        errorMessage: e
      }
    });
  }
}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('FETCH_ASYNC_SAGA_DATA', fetchAsyncSagaData);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    sagaStarterMessage(),
    watchIncrementAsync()
  ])
}


