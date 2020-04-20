// Export constant for change status
export const SET_STATUS = 'SET_STATUS';
export type SET_STATUS = typeof SET_STATUS;

// ACL status constants
export const STATUS_EMPTY = 'STATUS_EMPTY';
export const STATUS_SIGNING_IN = 'STATUS_SIGNING_IN';
export const STATUS_AUTHORIZING = 'STATUS_AUTHORIZING';
export const STATUS_AUTHORIZED = 'STATUS_AUTHORIZED';
export const STATUS_UNAUTHORIZED = 'STATUS_UNAUTHORIZED';

// Export all ACL status constants
export type AclStatuses =
    | typeof STATUS_EMPTY
    | typeof STATUS_SIGNING_IN
    | typeof STATUS_AUTHORIZING
    | typeof STATUS_AUTHORIZED
    | typeof STATUS_UNAUTHORIZED;
