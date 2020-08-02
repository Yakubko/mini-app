import { WindowSizeProps } from 'react-window-size';
import { RouteComponentProps } from 'react-router-dom';

import State from '../../../../../Store/state';
import { NavContentLeave } from '../../../../../Store/Gui/actions';

import { MenuItem } from '../../menu-items';

export interface StateProps {
    collapseMenu: State['gui']['collapseMenu'];
}

export interface DispatchProps {
    onNavContentLeave: () => NavContentLeave;
}

export type StoreProps = StateProps &
    DispatchProps &
    WindowSizeProps &
    RouteComponentProps & {
        navigation: MenuItem[];
    };
