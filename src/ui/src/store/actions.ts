import { AclActions } from './acl/actions';
import { GuiActions } from './gui/actions';

// Export all store actions
export type StoreActions = AclActions | GuiActions;
