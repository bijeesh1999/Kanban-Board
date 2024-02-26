import { createSlice } from "@reduxjs/toolkit";
import {getAllData , postData , putData , deleteSingleData , getOneData} from "./kanbanApi"


const kanbanSlice = createSlice({
  name: "Datas",
  initialState: {
    allData: [],
    post:[],
    singleData:[],
    delete:[],
    edited:[],
    error: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allData = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

// =====================================================
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

    //   =====================================================

      .addCase(putData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(putData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.edited = action.payload;
      })
      .addCase(putData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })


      .addCase(getOneData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleData = action.payload;
      })
      .addCase(getOneData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })


      .addCase(deleteSingleData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSingleData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.delete = action.payload;
      })
      .addCase(deleteSingleData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default kanbanSlice.reducer;