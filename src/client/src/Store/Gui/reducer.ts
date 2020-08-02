import * as constants from './constants';
import { GuiState } from './state';
import { GuiActions } from './actions';
import config from '../../config';

const initialState: GuiState = {
    isOpen: [],
    isTrigger: [],
    ...config,
};

const guiReducer = (state: GuiState = initialState, action: GuiActions): GuiState => {
    let trigger: string[] = [];
    let open: string[] = [];

    switch (action.type) {
        case constants.COLLAPSE_MENU:
            return {
                ...state,
                collapseMenu: !state.collapseMenu,
            };
        case constants.COLLAPSE_TOGGLE:
            if (action.payload.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.payload.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter((item) => item !== action.payload.menu.id);
                    trigger = trigger.filter((item) => item !== action.payload.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.payload.menu.id];
                    trigger = [...trigger, action.payload.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = state.isTrigger.indexOf(action.payload.menu.id);
                trigger = triggerIndex === -1 ? [action.payload.menu.id] : [];
                open = triggerIndex === -1 ? [action.payload.menu.id] : [];
            }

            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case constants.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case constants.NAV_COLLAPSE_LEAVE:
            if (action.payload.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.payload.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter((item) => item !== action.payload.menu.id);
                    trigger = trigger.filter((item) => item !== action.payload.menu.id);
                }
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            }
            return { ...state };
        default:
            return state;
    }
};

export default guiReducer;
