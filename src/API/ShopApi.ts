import { IBrand, IProduct, IType } from "../types/DBmodels";
import { IShopResponse } from "../types/shop";
import { $host } from "./instance";



export class ShopApi {

    static async fetchProducts(): Promise<IShopResponse<IProduct>> {
        const res = await $host.get<IShopResponse<IProduct>>(`api/product`)
        return res.data
    }

    static async fetchBrands(): Promise<IBrand[]> {
        const res = await $host.get<IBrand[]>(`api/brand`)
        return res.data
    }

    static async fetchTypes(): Promise<IType[]> {
        const res = await $host.get<IType[]>(`api/type`)
        return res.data
    }

    static async fetchOneProduct(id: string): Promise<IProduct> {
        const res = await $host.get<IProduct>(`api/product/${id}`)
        return res.data
    }

}