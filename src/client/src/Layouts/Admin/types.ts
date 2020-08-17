import { WindowSizeProps } from 'react-window-size';

import { CollapseMenu } from '../../Store/Gui/actions';

export interface DispatchProps {
    actionCollapseMenu: () => CollapseMenu;
}

export type StoreProps = DispatchProps & WindowSizeProps;
