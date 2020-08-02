import { combineReducers, Reducer } from 'redux';

import State from './state';
import AuthReducer from './Auth/reducer';
import GuiReducer from './Gui/reducer';

const Reducers: Reducer<State> = combineReducers<State>({
    auth: AuthReducer,
    gui: GuiReducer,
});

export default Reducers;
