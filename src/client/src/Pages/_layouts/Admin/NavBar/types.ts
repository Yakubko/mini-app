import State from '../../../../Store/state';

export interface StateProps {
    collapseMenu: State['gui']['collapseMenu'];
}

export interface DispatchProps {
    onToggleNavigation: () => void;
}

export type StoreProps = StateProps & DispatchProps;
