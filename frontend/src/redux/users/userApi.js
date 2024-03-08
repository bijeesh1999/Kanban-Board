import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("post/userLogin", async (data) => {
    console.log(data);
    if(data.emailId && data.password){
        const isLogin = await axios.post("http://localhost:8089/user/login",data ,{
            withCredentials:true
        });
        // console.log(isLogin);
        return isLogin.data
    }else{
        console.log('some fields are mandatory');
    }
});


export const userRegister = createAsyncThunk("pot/userRegister", async(data) => {
    console.log(data);
    if(data){
        const isRegister = await axios.post("http://localhost:8089/user/register",data,{
            withCredentials:true
        });
        console.log(isRegister);
    }
})
