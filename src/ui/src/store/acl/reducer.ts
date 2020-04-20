import * as constants from './constants';
import { AclState } from './state';
import { AclActions } from './actions';

// Create initial values
const initialState: AclState = {
    error: null,
    status: constants.STATUS_EMPTY,
    data: null,
};

// Create ACL reducer
const aclReducer = (state: AclState = initialState, action: AclActions): AclState => {
    switch (action.type) {
        case constants.SET_STATUS:
            const { status, data, error } = action.payload;
            return { status, data, error };

        default:
            return state;
    }
};

export default aclReducer;
