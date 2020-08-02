export const SET_STATE = 'SET_STATE';
export type SET_STATE = typeof SET_STATE;

// Acl status constants
export const STATE_EMPTY = 'STATE_EMPTY';
export const STATE_SIGNING_IN = 'STATE_SIGNING_IN';
export const STATE_AUTHORIZING = 'STATE_AUTHORIZING';
export const STATE_AUTHORIZED = 'STATE_AUTHORIZED';
export const STATE_UNAUTHORIZED = 'STATE_UNAUTHORIZED';

export type AuthStates =
    | typeof STATE_EMPTY
    | typeof STATE_SIGNING_IN
    | typeof STATE_AUTHORIZING
    | typeof STATE_AUTHORIZED
    | typeof STATE_UNAUTHORIZED;
