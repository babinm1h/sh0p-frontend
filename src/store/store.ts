import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartSlice from "./reducers/cartSlice"
import productPageSlice from "./reducers/productPageSlice"
import shopSlice from "./reducers/shopSlice"
import userSlice from "./reducers/userSlice"


const rootReducer = combineReducers({
    user: userSlice,
    shop: shopSlice,
    productPage: productPageSlice,
    cart: cartSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>
