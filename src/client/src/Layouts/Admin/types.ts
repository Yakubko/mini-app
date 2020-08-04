import { WindowSizeProps } from 'react-window-size';

import State from '../../Store/state';
import { CollapseMenu } from '../../Store/Gui/actions';

export interface StateProps {
    auth: {
        state: State['auth']['state'];
    };
    defaultPath: State['gui']['defaultPath'];
    collapseMenu: State['gui']['collapseMenu'];
}

export interface DispatchProps {
    actionCollapseMenu: () => CollapseMenu;
}

export type StoreProps = StateProps & DispatchProps & WindowSizeProps;
