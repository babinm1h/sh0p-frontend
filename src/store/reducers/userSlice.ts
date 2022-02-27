import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/DBmodels"
import { IUserState } from "../../types/user"



const initialState: IUserState = {
    user: null,
    isAuth: true
}



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},

    extraReducers:{
        
    }
})


export default userSlice.reducer