import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user', 
    initialState: {
        name: '',
        isLogged: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return {...state, isLogged: true, name: payload}
        },
        loggout(state) {
            return{ ...state, isLogged: false, name: ''}
        }
    }
})

export const { changeUser, loggout } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer