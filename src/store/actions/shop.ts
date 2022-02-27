import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShopApi } from "../../API/ShopApi";
import { ShopActionTypes } from "../../types/shop";



export const fetchProducts = createAsyncThunk(ShopActionTypes.FETCH_PRODUCTS, async (_, thunkApi) => {
    try {
        const data = await ShopApi.fetchProducts()
        return data
    } catch (err: any) {
        return thunkApi.rejectWithValue("Ошибка сервера")
    }
})


export const fetchBrands = createAsyncThunk(ShopActionTypes.FETCH_BRANDS, async (_, thunkApi) => {
    try {
        const data = await ShopApi.fetchBrands()
        return data
    } catch (err: any) {
        return thunkApi.rejectWithValue("Ошибка сервера")
    }
})


export const fetchTypes = createAsyncThunk(ShopActionTypes.FETCH_TYPES, async (_, thunkApi) => {
    try {
        const data = await ShopApi.fetchTypes()
        return data
    } catch (err: any) {
        return thunkApi.rejectWithValue("Ошибка сервера")
    }
})