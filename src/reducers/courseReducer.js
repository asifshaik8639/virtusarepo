import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Revolve from '../../node_modules/ramda/src/evolve';
import Rfilter from '../../node_modules/ramda/src/filter';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, Revolve({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id), Revolve({}, action.course)
      ];

    default:
      return state;
  }
}
