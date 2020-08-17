export interface AuthState {
    state: 'authorizing' | 'authorized' | 'unauthorized' | null;
    data: {
        id: number;
        username: string;
        full_name: string;
    } | null;
}
export const initialState: AuthState = {
    state: null,
    data: null,
};
