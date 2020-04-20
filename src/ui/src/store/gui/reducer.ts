import * as constants from './constants';
import { GuiState } from './state';
import { GuiActions } from './actions';

// Create initial values
const initialState: GuiState = {
    isDark: false,
};

// Create reducer
const guiReducer = (state: GuiState = initialState, action: GuiActions): GuiState => {
    switch (action.type) {
        // Toggle gui theme
        case constants.TOGGLE_MODE:
            return {
                ...state,

                isDark: !state.isDark,
            };

        default:
            return state;
    }
};

export default guiReducer;
