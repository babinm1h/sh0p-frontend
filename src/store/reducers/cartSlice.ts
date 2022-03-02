import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICartState } from "../../types/cart"
import { ICartProduct } from "../../types/DBmodels"
import { addToCart, decrProduct, fetchCartProducts, incrProduct, removeCartProduct } from "../actions/cart"

const getTotalPrice = (arr: ICartProduct[]) => arr.reduce((prev, obj) => obj.product.price * obj.quan + prev, 0)

const initialState: ICartState = {
    products: [],
    isLoading: false,
    isAdding: false,
    totalPrice: 0,
    totalCount: 0,
    isRemoving: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},

    extraReducers: {
        [addToCart.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            state.products.push(action.payload)
            state.isAdding = false
        },
        [addToCart.pending.type]: (state) => {
            state.isAdding = true
        },
        [addToCart.rejected.type]: (state) => {
            state.isAdding = false
        },


        [fetchCartProducts.fulfilled.type]: (state, action: PayloadAction<ICartProduct[]>) => {
            state.products = action.payload
            state.totalPrice = getTotalPrice(action.payload)
            state.isLoading = false
            state.totalCount = action.payload.reduce((prev, obj) => obj.quan + prev, 0)
        },
        [fetchCartProducts.pending.type]: (state,) => {
            state.isLoading = true
        },

        [removeCartProduct.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            state.products = state.products.filter(p => p.productId !== action.payload.productId)
            state.totalPrice -= action.payload.product.price * action.payload.quan
            state.isRemoving = false
            state.totalCount -= action.payload.quan
        },
        [removeCartProduct.pending.type]: (state) => {
            state.isRemoving = true
        },

        [incrProduct.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            const prod = state.products.find(p => p.productId === action.payload.productId)
            prod!.quan += 1
            state.totalPrice += action.payload.product.price
            state.totalCount += 1
        },
        [decrProduct.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            const prod = state.products.find(p => p.productId === action.payload.productId)
            prod!.quan -= 1
            state.totalPrice -= action.payload.product.price
            state.totalCount -= 1
        },
    }
})

export default cartSlice.reducer;