import expect from 'expect';
import rxjsReducer from './rxjsReducer';
import * as rxjsActions from '../actions/rxjsActions';

const initialState = {
      authors: [],
      courses: [],
      charts:[],
      rxjsData:[],
      loading: false,
      loaded: false,
      errorMessage: 'error occured',
      reduxSagaResultData: [],
      ajaxCallsInProgress: 0
    };

describe('rxjsReducer Reducer', () => {
    
  it('should return the initial state', () => {
    expect(rxjsReducer(undefined, {})).toEqual(initialState);
    
  });
    
  it('should update the values of loadiing,loaded for action type GET_DATA', () => {
    const action = { type: 'GET_DATA' };      
    const newState = rxjsReducer(initialState, action);
    expect(newState.loading).toEqual(true);
    expect(newState.loaded).toEqual(false);
  });
    
   it('should update the values for action type FETCH_USER_FULFILLED', () => {
    const action = { type: 'FETCH_USER_FULFILLED' };      
    const newState = rxjsReducer(initialState, action);    
    expect(newState.loading).toEqual(false);
    expect(newState.loaded).toEqual(true);   
  });   
    

});
