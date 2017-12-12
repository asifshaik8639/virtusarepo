import { combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import charts from './chartReducer';
import reduxObservables from './rxjsReducer';
import reduxSaga from './reduxSagaReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  charts,
  reduxObservables,
  reduxSaga,
  ajaxCallsInProgress
});

export default rootReducer;
