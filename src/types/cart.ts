import { ICartProduct } from "./DBmodels";


export interface ICartState {
    products: ICartProduct[]
    isLoading: boolean
    isAdding: boolean
    totalPrice: number
    totalCount: number
    isRemoving: boolean
}

export enum CartActionTypes {
    FETCH_PRODUCTS = "cart/FETCH_PRODUCTS",
    ADD_TO_CART = "cart/ADD_TO_CART",
    REMOVE_FROM_CART = "cart/REMOVE_FROM_CART",
    INCR_PRODUCT = "cart/INCR_PRODUCT",
    DECR_PRODUCT = "cart/DECR_PRODUCT",
}