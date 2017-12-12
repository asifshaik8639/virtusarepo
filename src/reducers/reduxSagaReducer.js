import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reduxSagaReducer(state = initialState, action) { 
    
  switch (action.type) {      
    case 'FETCH_SAGA_INITIATED':                  
      return Object.assign({}, state, {
            loading: true, loaded: false
        }); 
    case 'FETCH_SAGA_DATA_SUCCESS':
      console.log('entered in reduxSagaReducer',action.type + ' and action =>', action);      
      return Object.assign({}, state, {
            loading: false, loaded: true, reduxSagaResultData: action.payload
        }); 
    case 'FETCH_SAGA_DATA_ERROR':         
      return Object.assign({}, state, {
            loading: false, loaded: true, reduxSagaErrorMessage: action.payload
        });       
    default:
      return state;
  }
}




   