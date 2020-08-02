import * as constants from './constants';

export interface CollapseMenu {
    type: constants.COLLAPSE_MENU;
}
export function collapseMenu(): CollapseMenu {
    return { type: constants.COLLAPSE_MENU };
}

export interface CollapseToggle {
    type: constants.COLLAPSE_TOGGLE;
    payload: {
        menu: {
            id: string;
            type: string;
        };
    };
}
export function collapseToggle(id: string, type: string): CollapseToggle {
    return {
        type: constants.COLLAPSE_TOGGLE,
        payload: {
            menu: {
                id,
                type,
            },
        },
    };
}

export interface NavCollapseLeave {
    type: constants.NAV_COLLAPSE_LEAVE;
    payload: {
        menu: {
            id: string;
            type: string;
        };
    };
}
export function navCollapseLeave(id: string, type: string): NavCollapseLeave {
    return {
        type: constants.NAV_COLLAPSE_LEAVE,
        payload: {
            menu: {
                id,
                type,
            },
        },
    };
}

export interface NavContentLeave {
    type: constants.NAV_CONTENT_LEAVE;
}
export function navContentLeave(): NavContentLeave {
    return { type: constants.NAV_CONTENT_LEAVE };
}

export type GuiActions = CollapseMenu | CollapseToggle | NavCollapseLeave | NavContentLeave;
