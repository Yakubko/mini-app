import { WindowSizeProps } from 'react-window-size';

import State from '../../../Store/state';
import { CollapseMenu } from '../../../Store/Gui/actions';
import { fetchAuthUser } from '../../../Store/Auth/actions';

export interface StateProps {
    auth: {
        state: State['auth']['state'];
    };
    defaultPath: State['gui']['defaultPath'];
    collapseMenu: State['gui']['collapseMenu'];
}

export interface DispatchProps {
    fetchAuthUser: typeof fetchAuthUser;
    actionCollapseMenu: () => CollapseMenu;
}

export type StoreProps = StateProps & DispatchProps & WindowSizeProps;
