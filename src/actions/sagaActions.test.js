import expect from 'expect';
import * as sagaActions from './sagaActions';
import * as types from './actionTypes';

describe('Saga Actions', () => {
  describe('FETCH_ASYNC_SAGA_DATA', () => {    
    const expectedAction = {
      type: types.FETCH_ASYNC_SAGA_DATA
    };

    const action = sagaActions.getReduxSagaData();
    expect(action).toEqual(expectedAction);
  });
});

