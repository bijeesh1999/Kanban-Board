import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./adminApi";


const adminslice = createSlice({
    name:"users",
    initialState:{
        login:[],
        error: [],
        status: "idle",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(adminLogin.pending , (state)=>{
            state.status = "loading" ;
        })
        .addCase(adminLogin.fulfilled , (state , action)=>{
            state.status = "fullfillde"
            state.login=action.payload
        })
        .addCase(adminLogin.rejected , (state , action)=>{
            state.status = "rejected" ;
            state.error = action.error.message;
        })

        // ==============================================
    }
})


export default adminslice.reducer;
