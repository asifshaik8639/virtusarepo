import expect from 'expect';
import * as rxjsActions from './rxjsActions';
import * as types from './actionTypes';

describe('Rxjs Actions', () => {
  describe('GET_DATA', () => {    
    const expectedAction = {
      type: types.GET_DATA
    };

    const action = rxjsActions.getObservableData();

    expect(action).toEqual(expectedAction);
  });
});