import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type AuthState = {
    token: string | null
}

const INITIAL_STATE: AuthState = {
    token: null
}

const slice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { token },
            }: PayloadAction<{ token: string }>,
        ) => {
            state.token = token
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.token


