import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            authUser: true,
        },
    },
    reducers: {
        login(state, action) {
            const userId = action.payload;
            const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
            const passwordValidation =
                /^(?=.*\d)(?=.*[a-z])/i.test(
                    userId.password
                );
            state.user = userId;
            if (!userValidation || !passwordValidation) {
                state.user.authUser = false;
            } else {
                state.user.authUser = true;
                const saveState = JSON.stringify(userId);
                sessionStorage.setItem("authUser", saveState);
            }
        },
        logout(state) {
            state.user = {
                name: "",
                password: "",
                authUser: false,
            };
            sessionStorage.clear();
        },
    },
});


export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;