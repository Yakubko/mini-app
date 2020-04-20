import { combineReducers, Reducer } from 'redux';

import State from './state';
import aclReducer from './acl/reducer';
import guiReducer from './gui/reducer';

// Export combined all reducers
export const reducers: Reducer<State> = combineReducers<State>({
    acl: aclReducer,
    gui: guiReducer,
});
