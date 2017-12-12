import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {reduxObservableEpic} from '../epics';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware(reduxObservableEpic);

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {    
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, epicMiddleware)));  
}
