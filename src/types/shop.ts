import { IBrand, IProduct, IType } from "./DBmodels";

export interface IShopState {
    brands: IBrand[]
    types: IType[]
    products: IProduct[]
    productsLoading: boolean
    activeBrand: IBrand
    activeType: IType
    typeError: string
    brandError: string
    productError: string
    page: number
    totalCount: number
    limit: number
}


export interface IShopResponse<T> {
    count: number
    rows: T[]
}

export enum ShopActionTypes {
    FETCH_PRODUCTS = "shop/FETCH_shop",
    FETCH_BRANDS = "shop/FETCH_BRANDS",
    FETCH_TYPES = "shop/FETCH_TYPES",
    CREATE_TYPE = "shop/CREATE_TYPE",
    CREATE_PRODUCT = "shop/CREATE_PRODUCT",
    CREATE_BRAND = "shop/CREATE_BRAND"
}

export interface IFetchProductsPayload {
    typeId?: number
    brandId?: number
    page?: number
}