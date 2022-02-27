import { $host } from "./instance";


export class UserApi {

    static async registration(email: string, password: string): Promise<string> {
        const res = await $host.post<string>(`api/user/registr`, { email, password })
        return res.data
    }


    static async login(email: string, password: string): Promise<string> {
        const res = await $host.post<string>(`api/user/login`, { email, password })
        return res.data
    }


    static async check(): Promise<string> {
        const res = await $host.post<string>(`api/user/check`)
        return res.data
    }

}