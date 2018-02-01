import expect from 'expect';
import reduxSagaReducer from './reduxSagaReducer';
import * as sagaActions from '../actions/sagaActions';

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

describe('reduxSaga Reducer', () => {
    
  it('should return the initial state', () => {
    expect(reduxSagaReducer(undefined, {})).toEqual(initialState);
    
  });
    
  it('should update the values of loadiing,loaded when passed FETCH_SAGA_INITIATED', () => {
    const action = { type: 'FETCH_SAGA_INITIATED' };      
    const newState = reduxSagaReducer(initialState, action);
    expect(newState.loading).toEqual(true);
    expect(newState.loaded).toEqual(false);
  });
    
   it('should update the values of loadiing,loaded, reduxSagaResultData when passed FETCH_SAGA_DATA_SUCCESS', () => {
    const action = { type: 'FETCH_SAGA_DATA_SUCCESS' };      
    const newState = reduxSagaReducer(initialState, action);    
    expect(newState.loading).toEqual(false);
    expect(newState.loaded).toEqual(true);   
  });   
    
  it('should show the error message when passed FETCH_SAGA_DATA_ERROR', () => {
    const action = { type: 'FETCH_SAGA_DATA_ERROR' };      
    const newState = reduxSagaReducer(initialState, action);    
    expect(newState.errorMessage).toEqual('error occured');   
  });       
     


});
