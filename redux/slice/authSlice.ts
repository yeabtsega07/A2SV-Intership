import { User } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SessionState {
    user: User | null;
}

const initialState: SessionState = {
    user: {
        accessToken: "",
        email: "",
        name: "",
        profileComplete: true,
        profilePicUrl: "",
        profileStatus: "",
        refreshToken: "",
        role: "",
    },
};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        updateUserEmail(state, action: PayloadAction<string>) {
            if (state.user) {
                state.user.email = action.payload;
            }
        },
        removeUser(state) {
            state.user = null;
        },
        removeUserEmail(state) {
            if (state.user) {
                state.user.email = null;
            }
        },
    },
});

export const { updateUser, updateUserEmail, removeUser, removeUserEmail } = authSlice.actions;
export default authSlice.reducer;