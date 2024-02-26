import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllData = createAsyncThunk("get/getAllData", async () => {
  const res = await axios.get("http://localhost:8089");
  if (res) {
    return res.data;
  }
});

export const postData = createAsyncThunk("post/postData", async (data) => {
  const res = await axios.post("http://localhost:8089", data);
  if (res) {
    return res.data;
  }
});

export const putData = createAsyncThunk("put/putOneData", async (data, id) => {
  const res = await axios.put(`http://localhost:8089/${id}`, data);
  if (res) {
    console.log(res);
    // return res.data
  }
});

export const deleteSingleData = createAsyncThunk("delete/deleteOneData", async (id) => {
  const res = await axios.delete(`http://localhost:8089/${id}`);
  if (res) {
    return res.data
  }
});

export const getOneData = createAsyncThunk("get/getOneData", async (id) => {
  const res = await axios.get(`http://localhost:8089/${id}`);
  if (res) {
    return res.data;
  }
});
