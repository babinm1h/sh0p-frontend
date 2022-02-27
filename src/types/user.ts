import { IUser } from "./DBmodels";


export enum UserActionTypes {
    REGISTRATION = "user/registration",
    LOGIN = 'user/login',
    CHECK = "user/check"
}

export interface IUserState {
    user: IUser | null
    isAuth: boolean
}


export interface IAuthPayload {
    email: string
    password: string
}