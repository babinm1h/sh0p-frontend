import { $authHost, $host } from "./instance";
import jwt_decode from "jwt-decode"
import { IUser } from "../types/DBmodels";

export class UserApi {

    static async registration(email: string, password: string): Promise<IUser> {
        const res = await $host.post<string>(`api/user/registr`, { email, password })
        localStorage.setItem("token", res.data)
        console.log(jwt_decode(res.data));
        return jwt_decode(res.data)
    }


    static async login(email: string, password: string): Promise<IUser> {
        const res = await $host.post<string>(`api/user/login`, { email, password })
        localStorage.setItem("token", res.data)
        console.log(jwt_decode(res.data));
        return jwt_decode(res.data)
    }


    static async check(): Promise<IUser> {
        const res = await $authHost.get<string>(`api/user/check`)
        localStorage.setItem("token", res.data)
        return jwt_decode(res.data)
    }


}