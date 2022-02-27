import { IUser } from "./DBmodels";


export enum UserActionTypes {
    REGISTRATION = "user/registration",
    LOGIN = 'user/login',
    CHECK = "user/check",
    LOGOUT="user/logout"
}

export interface IUserState {
    user: IUser | null
    isAuth: boolean
    error: string
    isLoading: boolean
}


export interface IAuthPayload {
    email: string
    password: string
}