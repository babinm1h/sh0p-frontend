import { IProduct } from "./DBmodels";

export interface IProductPageState {
    isLoading: boolean
    product: IProduct | null
}

export enum ProductPageActionTypes {
    FETCH_PRODUCT = "productPage/FETCH_PRODUCT"
}