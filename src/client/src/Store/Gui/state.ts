import { Config } from '../../config';

export interface GuiState extends Config {
    isOpen: string[];
    isTrigger: string[];
}
