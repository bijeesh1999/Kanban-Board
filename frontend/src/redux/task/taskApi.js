import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTask = createAsyncThunk("get/getAllData", async () => {
  const res = await axios.get("http://localhost:8089/task");
  if (res) {
    return res.data;
  }
});

export const getMatcheTasks = createAsyncThunk("get/matchTask" , async (id) =>{
  const res = await axios.get(`http://localhost:8089/task/match/${id}`);
  if (res) {
    return res.data;
  }
})

export const postTask = createAsyncThunk("post/postData", async (data) => {
  const res = await axios.post("http://localhost:8089/task", data);
  if (res) {
    return res.data;
  }
});

export const putOneTask = createAsyncThunk("put/putOneData", async (data) => {
  console.log(data);
  console.log(data.editData , data.id);
  if(data.editData){
    const res = await axios.put(`http://localhost:8089/task/${data.id}`,data.editData);
    if (res) {
      console.log(res);
      return res.data
    }
  }else if(data.option){
    const res = await axios.put(`http://localhost:8089/task/${data.id}`,{option:data.option});
    if (res) {
      console.log(res);
      return res.data
    }
  }
});

export const deleteOneTask = createAsyncThunk("delete/deleteOneData", async (id) => {
  const res = await axios.delete(`http://localhost:8089/task/${id}`);
  if (res) {
    return res.data
  }
});

export const getOneTask = createAsyncThunk("get/getOneData", async (id) => {
  const res = await axios.get(`http://localhost:8089/task/${id}`);
  if (res) {
    return res.data;
  }
});
