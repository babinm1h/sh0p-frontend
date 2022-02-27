import { IBrand, IProduct, IType } from "../types/DBmodels";
import { IShopResponse } from "../types/shop";
import { $authHost, $host } from "./instance";



export class ShopApi {

    static async fetchProducts(typeId?: number, brandId?: number, page?: number, limit = 3): Promise<IShopResponse<IProduct>> {
        const res = await $host.get<IShopResponse<IProduct>>(`api/product`, {
            params: { typeId, brandId, page, limit }
        })
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


    // create
    static async createType(name: string): Promise<IType> {
        const res = await $authHost.post<IType>(`api/type`, { name })
        return res.data
    }

    static async createBrand(name: string): Promise<IBrand> {
        const res = await $authHost.post<IBrand>(`api/brand`, { name })
        return res.data
    }

    static async createProduct(payload: FormData): Promise<IProduct> {
        const res = await $authHost.post<IProduct>(`api/product`, payload)
        return res.data
    }

}