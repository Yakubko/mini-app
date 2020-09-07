import { CollapseMenu } from 'Store/Gui/actions';
import { MenuItem } from '../../../menu-items';

export interface DispatchProps {
    onItemClick: () => CollapseMenu;
}

export type StoreProps = DispatchProps & {
    item: MenuItem;
};
