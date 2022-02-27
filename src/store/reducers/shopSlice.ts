import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBrand, IProduct, IType } from "../../types/DBmodels"
import { IShopResponse, IShopState } from "../../types/shop"
import { fetchBrands, fetchProducts, fetchTypes } from "../actions/shop"



const initialState: IShopState = {
    types: [],
    brands: [],
    products: [],
    productsLoading: false,

    activeBrand: {} as IBrand,
    activeType: {} as IType
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setActiveBrand(state, action: PayloadAction<IBrand>) {
            state.activeBrand = action.payload
        },
        setActiveType(state, action: PayloadAction<IType>) {
            state.activeType = action.payload
        },
    },

    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IShopResponse<IProduct>>) => {
            state.products = action.payload.rows
            state.productsLoading = false
        },
        [fetchProducts.rejected.type]: (state, action) => {

        },
        [fetchProducts.pending.type]: (state,) => {
            state.productsLoading = true
        },


        // brands
        [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
            state.brands = action.payload
        },


        // types
        [fetchTypes.fulfilled.type]: (state, action: PayloadAction<IType[]>) => {
            state.types = action.payload
        },
    }
})


export default shopSlice.reducer

export const { setActiveBrand, setActiveType } = shopSlice.actions