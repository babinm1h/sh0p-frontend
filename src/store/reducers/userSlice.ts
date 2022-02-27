import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/DBmodels"
import { IUserState } from "../../types/user"
import { checkAuth, login, registration } from "../actions/user"



const initialState: IUserState = {
    user: null,
    isAuth: false,
    error: "",
    isLoading: true
}



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            state.user = null
            state.isAuth = false
            state.isLoading = false
            localStorage.removeItem("token")
        }
    },

    extraReducers: {
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.user = action.payload
            state.error = ""
        },
        [registration.rejected.type]: (state, action: PayloadAction<IUser>) => {
            state.error = "Пользователь с таким email уже существует"
        },

        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.user = action.payload
            state.error = ""
        },
        [login.rejected.type]: (state) => {
            state.error = "Неправильный email или пароль"
        },

        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.error = ""
            state.user = action.payload
            state.isLoading = false
            state.isAuth = true
        },
        [checkAuth.pending.type]: (state,) => {
            state.isLoading = true
        },
        [checkAuth.rejected.type]: (state,) => {
            state.isLoading = false
        },
    }
})


export default userSlice.reducer

export const { logout } = userSlice.actions