import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProgress = createAsyncThunk("get/getAllProgress", async () => {
  const res = await axios.get(`http://localhost:8089/progres`);
  if (res) {
    return res.data;
  }
});

export const getMatchProgress = createAsyncThunk("get/matchProgress" , async (id) =>{
  const res = await axios.get(`http://localhost:8089/progres/match/${id}`)
  if(res){
    return res.data
  }
})

export const postProgress = createAsyncThunk("post/postProgress", async (data) => {
    console.log(data);
  const res = await axios.post("http://localhost:8089/progres", data);
  if (res) {
    return res.data;
  }
});

export const putOneProgress = createAsyncThunk("put/putProgress", async (data) => {
  const res = await axios.put(`http://localhost:8089/progres/${data.id}`, data.values);
  if (res) {
    console.log(res);
    return res.data
  }
});

export const deleteOneProgress = createAsyncThunk("delete/deleteOneProgress", async (id) => {
  const res = await axios.delete(`http://localhost:8089/progres/${id}`);
  if (res) {
    return res.data
  }
});

export const getOneProgress = createAsyncThunk("get/getOneProgress", async (id) => {
  const res = await axios.get(`http://localhost:8089/progres/${id}`);
  if (res) {
    return res.data;
  }
});
