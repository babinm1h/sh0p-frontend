import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShopApi } from "../../API/ShopApi";
import { IFetchProductsPayload, ShopActionTypes } from "../../types/shop";



export const fetchProducts = createAsyncThunk(ShopActionTypes.FETCH_PRODUCTS,
    async (payload: IFetchProductsPayload, thunkApi) => {
        try {
            const data = await ShopApi.fetchProducts(payload.typeId, payload.brandId, payload.page)
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


// create
export const createType = createAsyncThunk(ShopActionTypes.CREATE_TYPE,
    async (name: string, thunkApi) => {
        try {
            const data = await ShopApi.createType(name)
            console.log(data);
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка сервера")
        }
    })

export const createBrand = createAsyncThunk(ShopActionTypes.CREATE_BRAND,
    async (name: string, thunkApi) => {
        try {
            const data = await ShopApi.createBrand(name)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка сервера")
        }
    })


export const createProduct = createAsyncThunk(ShopActionTypes.CREATE_PRODUCT,
    async (payload: FormData, thunkApi) => {
        try {
            const data = await ShopApi.createProduct(payload)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка сервера")
        }
    })


