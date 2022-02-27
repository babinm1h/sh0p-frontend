import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserApi } from "../../API/UserApi";
import { IAuthPayload, UserActionTypes } from "../../types/user";



export const registration = createAsyncThunk(UserActionTypes.REGISTRATION,
    async (payload: IAuthPayload, thunkApi) => {
        try {
            const data = await UserApi.registration(payload.email, payload.password)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Пользователь с таким email уже существует")
        }
    })



export const login = createAsyncThunk(UserActionTypes.LOGIN,
    async (payload: IAuthPayload, thunkApi) => {
        try {
            const data = await UserApi.login(payload.email, payload.password)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Неправильный email или пароль")
        }
    })


export const checkAuth = createAsyncThunk(UserActionTypes.CHECK,
    async (_, thunkApi) => {
        try {
            const data = await UserApi.check()
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Не авторизован")
        }
    })

    
