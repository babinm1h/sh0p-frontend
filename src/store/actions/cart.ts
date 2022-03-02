import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartApi } from "../../API/cartApi";
import { CartActionTypes } from "../../types/cart";


export const addToCart = createAsyncThunk(CartActionTypes.ADD_TO_CART, async (id: number, thunkApi) => {
    try {
        const data = await CartApi.addToCart(id)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue("Ошибка добавления товара")
    }
})


export const fetchCartProducts = createAsyncThunk(CartActionTypes.FETCH_PRODUCTS,
    async (_, thunkApi) => {
        try {
            const data = await CartApi.fetchProducts()
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка получения товара")
        }
    })


export const removeCartProduct = createAsyncThunk(CartActionTypes.REMOVE_FROM_CART,
    async (id: number, thunkApi) => {
        try {
            const data = await CartApi.removeFromCart(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка удаления товара")
        }
    })


export const incrProduct = createAsyncThunk(CartActionTypes.INCR_PRODUCT,
    async (id: number, thunkApi) => {
        try {
            const data = await CartApi.increase(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка добавления товара")
        }
    })


export const decrProduct = createAsyncThunk(CartActionTypes.DECR_PRODUCT,
    async (id: number, thunkApi) => {
        try {
            const data = await CartApi.decrease(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка добавления товара")
        }
    })