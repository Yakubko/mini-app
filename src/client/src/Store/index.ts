import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import State from './state';
import Reducers from './reducers';
import { StoreActions } from './actions';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = [thunk];

export default createStore<State, StoreActions, any, any>(Reducers, composeEnhancers(applyMiddleware(...middleware)));
