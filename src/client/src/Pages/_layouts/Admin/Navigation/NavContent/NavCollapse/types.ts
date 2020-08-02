import { RouteComponentProps } from 'react-router-dom';

import State from '../../../../../../Store/state';
import { MenuItem } from '../../../menu-items';
import { CollapseToggle } from '../../../../../../Store/Gui/actions';

export interface StateProps {
    isOpen: State['gui']['isOpen'];
    isTrigger: State['gui']['isTrigger'];
}

export interface DispatchProps {
    onCollapseToggle: (id: string, type: string) => CollapseToggle;
}

export type StoreProps = StateProps &
    DispatchProps &
    RouteComponentProps & {
        item: MenuItem;
        type: string;
    };
