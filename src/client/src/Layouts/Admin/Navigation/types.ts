import { WindowSizeProps } from 'react-window-size';

import State from '../../../Store/state';
import { CollapseMenu } from '../../../Store/Gui/actions';

export interface StateProps {
    collapseMenu: State['gui']['collapseMenu'];
    navFixedLayout: State['gui']['navFixedLayout'];
    boxLayout: State['gui']['boxLayout'];
}

export interface DispatchProps {
    onToggleNavigation: () => CollapseMenu;
}

export type StoreProps = StateProps & DispatchProps & WindowSizeProps;
