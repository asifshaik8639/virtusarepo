import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Revolve from '../../node_modules/ramda/src/evolve';


export default function rxjsReducer(state = initialState, action) {
  
  switch (action.type) {
    case 'GET_DATA':
      return Object.assign({}, state, {
        loading: true, loaded: false
        });   
    case 'FETCH_USER_FULFILLED':
      debugger;      
      return Object.assign({}, state, {
            loading: false, loaded: true, rxjsData: action.payload
        }); 
    default:
      return state;
  }
}




   