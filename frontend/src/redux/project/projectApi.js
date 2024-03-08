import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProject = createAsyncThunk("get/getAllProject", async () => {
  const res = await axios.get("http://localhost:8089/project");
  if (res) {
    return res.data;
  }
});


export const getMatchedProject = createAsyncThunk("get/getMatchProject", async (id) => {
  console.log(id);
  const res = await axios.get(`http://localhost:8089/project/match/${id}`);
  if (res) {
    return res.data;
  }
});


export const postProject = createAsyncThunk("post/postProject", async (data) => {
    console.log(data);
  const res = await axios.post("http://localhost:8089/project", data);
  if (res) {
    console.log(res);
    return res.data;
  }
});

export const putOneProject = createAsyncThunk("put/putOneProject", async (data) => {
//   console.log(data);
//   console.log();
    const res = await axios.put(`http://localhost:8089/project/${data.id}`,data.values);
    if (res) {
      console.log(res);
      return res.data
    }
});

export const deleteOneProject = createAsyncThunk("delete/deleteOneProject", async (id) => {
  const res = await axios.delete(`http://localhost:8089/project/${id}`);
  if (res) {
    return res.data
  }
});

export const getOneProject = createAsyncThunk("get/getOneProject", async (id) => {
  const res = await axios.get(`http://localhost:8089/project/${id}`);
  if (res) {
    return res.data;
  }
});

