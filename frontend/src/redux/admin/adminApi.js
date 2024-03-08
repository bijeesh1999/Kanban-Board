import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminLogin = createAsyncThunk("post/adminLogin", async (data) => {
    console.log(data);
    if(data.emailId && data.password){
        const isAdmin = await axios.post("http://localhost:8089/admin/login",data ,{
            withCredentials:true
        });
        console.log(isAdmin);
    }else{
        console.log('some fields are mandatory');
    }
});