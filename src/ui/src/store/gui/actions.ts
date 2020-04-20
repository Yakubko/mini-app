import * as constants from './constants';

// Action for toggle GUI theme
export interface ToggleMode {
    type: constants.TOGGLE_MODE;
}
export function toggleMode(): ToggleMode {
    return { type: constants.TOGGLE_MODE };
}

// Export all GUI actions
export type GuiActions = ToggleMode;
