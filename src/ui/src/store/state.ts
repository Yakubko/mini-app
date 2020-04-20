import { AclState } from './acl/state';
import { GuiState } from './gui/state';

// Export the whole state interface
export default interface State {
    acl: AclState;
    gui: GuiState;
}
