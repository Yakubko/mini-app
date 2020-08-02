import { AuthState } from './Auth/state';
import { GuiState } from './Gui/state';

export default interface State {
    auth: AuthState;
    gui: GuiState;
}
