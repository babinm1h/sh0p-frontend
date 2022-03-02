import { ICartProduct } from "../types/DBmodels";
import { $authHost } from "./instance";

export class CartApi {

    static async addToCart(id: number): Promise<ICartProduct> {
        const res = await $authHost.post<ICartProduct>(`api/cart/${id}`)
        return res.data
    }

    static async removeFromCart(id: number) {
        const res = await $authHost.delete<ICartProduct>(`api/cart/${id}`)
        return res.data
    }

    static async fetchProducts(): Promise<ICartProduct[]> {
        const res = await $authHost.get<ICartProduct[]>("api/cart")
        return res.data
    }

    static async increase(id: number): Promise<ICartProduct> {
        const res = await $authHost.put<ICartProduct>(`api/cart/add/${id}`)
        return res.data
    }

    static async decrease(id: number): Promise<ICartProduct> {
        const res = await $authHost.put<ICartProduct>(`api/cart/remove/${id}`)
        return res.data
    }

}