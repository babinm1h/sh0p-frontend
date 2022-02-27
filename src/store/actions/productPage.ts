import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShopApi } from "../../API/ShopApi";
import { ProductPageActionTypes } from "../../types/productPage";


export const fetchProductPage = createAsyncThunk(ProductPageActionTypes.FETCH_PRODUCT,
    async (id: string, thunkApi) => {
        try {
            const data = await ShopApi.fetchOneProduct(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка сервера")
        }
    })