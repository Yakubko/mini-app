import { CollapseMenu } from 'Store/Gui/actions';

export interface DispatchProps {
    actionCollapseMenu: () => CollapseMenu;
}

export type StoreProps = DispatchProps;
