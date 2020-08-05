export interface AuthState {
    state: 'authorizing' | 'authorized' | 'unauthorized' | null;
    data: {
        name: string;
        title: string;
    } | null;
}
export const initialState: AuthState = {
    state: null,
    data: null,
};
