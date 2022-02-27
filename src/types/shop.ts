import { IBrand, IProduct, IType } from "./DBmodels";

export interface IShopState {
    brands: IBrand[]
    types: IType[]
    products: IProduct[]
    productsLoading: boolean
    activeBrand: IBrand
    activeType: IType
}


export interface IShopResponse<T> {
    count: number
    rows: T[]
}

export enum ShopActionTypes {
    FETCH_PRODUCTS = "products/FETCH_PRODUCTS",
    FETCH_BRANDS = "products/FETCH_BRANDS",
    FETCH_TYPES = "products/FETCH_TYPES",
}

