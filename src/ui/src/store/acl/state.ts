import * as constants from './constants';

// Export ACL state interface
export interface AclState {
    error: null | string;
    status: constants.AclStatuses;
    data: null | {
        user: null | {
            username: string;
            full_name: string;
        };
    };
}
