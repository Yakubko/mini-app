export interface AuthState {
    state: 'authorizing' | 'authorized' | 'unauthorized' | null;
    data: {} | null;
}
export const initialState: AuthState = {
    state: null,
    data: null,
};
