import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../types/DBmodels"
import { IProductPageState } from "../../types/productPage"
import { fetchProductPage } from "../actions/productPage"


const initialState: IProductPageState = {
    product: null,
    isLoading: false
}


const productPage = createSlice({
    name: "productPage",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchProductPage.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
            state.product = action.payload
            state.isLoading = false
        },
        [fetchProductPage.pending.type]: (state) => {
            state.isLoading = true
        },
    }
})

export default productPage.reducer