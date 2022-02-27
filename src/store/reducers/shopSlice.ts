import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBrand, IProduct, IType } from "../../types/DBmodels"
import { IShopResponse, IShopState } from "../../types/shop"
import { fetchBrands, fetchProducts, fetchTypes } from "../actions/shop"



const initialState: IShopState = {
    types: [],
    brands: [],
    products: [],
    productsLoading: false,
    typeError: "",
    brandError: "",
    productError: "",

    activeBrand: {} as IBrand,
    activeType: {} as IType,
    page: 1,
    totalCount: 0,
    limit: 3
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setActiveBrand(state, action: PayloadAction<IBrand>) {
            state.activeBrand = action.payload
            state.page = 1
        },
        setActiveType(state, action: PayloadAction<IType>) {
            state.activeType = action.payload
            state.page = 1
        },
        setPage(state, action) {
            state.page = action.payload
        }
    },

    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IShopResponse<IProduct>>) => {
            state.products = action.payload.rows
            state.totalCount = action.payload.count
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

export const { setActiveBrand, setActiveType, setPage } = shopSlice.actions