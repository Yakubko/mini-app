import State from '../../../Store/state';
import { fetchAuthUser, signIn } from '../../../Store/Auth/actions';

export interface StateProps {
    state: State['auth']['state'];
    error: State['auth']['error'];
}

export interface DispatchProps {
    signIn: typeof signIn;
    fetchAuthUser: typeof fetchAuthUser;
}

export type StoreProps = StateProps & DispatchProps;
