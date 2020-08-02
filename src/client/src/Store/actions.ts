import { AuthActions } from './Auth/actions';
import { GuiActions } from './Gui/actions';

export type StoreActions = AuthActions | GuiActions;
