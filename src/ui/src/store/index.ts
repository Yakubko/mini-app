import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import State from './state';
import { reducers } from './reducers';
import { StoreActions } from './actions';

// TS declaration for debugging
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
// Allow debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware
const middleware = [thunk];
export default createStore<State, StoreActions, any, any>(reducers, composeEnhancers(applyMiddleware(...middleware)));
