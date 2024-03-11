import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllAssignedTasks = createAsyncThunk("get/assignedTask",async(id)=>{

    const allAssignedTasks = await axios.get(`http://localhost:8089/assignTask/${id}`)
    if(allAssignedTasks){
        console.log(allAssignedTasks);
        return allAssignedTasks.data
    }
})


export const postAssignedTask = createAsyncThunk("Post/assignedTask",async(data)=>{

    console.log(data);

    const postAssignedTask = await axios.post("http://localhost:8089/assignTask",data)
    if(postAssignedTask){
        console.log(postAssignedTask);
        return postAssignedTask.data
    }
})