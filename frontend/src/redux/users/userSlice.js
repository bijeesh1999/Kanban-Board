import { createSlice } from "@reduxjs/toolkit";
import { userLogin , userRegister } from "./userApi";


const userslice = createSlice({
    name:"users",
    initialState:{
        login:[],
        register:[],
        error: [],
        status: "idle",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(userLogin.pending , (state)=>{
            state.status = "loading" ;
        })
        .addCase(userLogin.fulfilled , (state , action)=>{
            state.status = "fullfilled"
            state.login=action.payload
        })
        .addCase(userLogin.rejected , (state , action)=>{
            state.status = "rejected" ;
            state.error = action.error.message;
        })

        // ==============================================

        .addCase(userRegister.pending ,(state)=>{
            state.status = 'loading'

        })
        .addCase(userRegister.fulfilled ,(state , action)=>{
            state.status = "fullfilled";
            state.register = action.payload;
        })
        .addCase(userRegister.rejected ,(state , action)=>{
            state.status = "rejected";
            state.error = action.error.message;
        })
    }
})


export default userslice.reducer;
