import config, { Config } from '../../config';

export interface GuiState extends Config {
    isOpen: string[];
    isTrigger: string[];
}

export const initialState: GuiState = {
    isOpen: [],
    isTrigger: [],
    ...config,
};
