import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProgress,
  postProgress,
  putOneProgress,
  deleteOneProgress,
  getOneProgress,
  getMatchProgress,
} from "./progressApi";

const progresSlice = createSlice({
  name: "Datas",
  initialState: {
    allProgress: [],
    matchProgress: [],
    post: [],
    singleProgress: [],
    delete: [],
    edited: [],
    error: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProgress = action.payload;
      })
      .addCase(getAllProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================

      .addCase(getMatchProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMatchProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matchProgress = action.payload;
      })
      .addCase(getMatchProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================
      .addCase(postProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(postProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   =====================================================

      .addCase(putOneProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(putOneProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.edited = action.payload;
      })
      .addCase(putOneProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getOneProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProgress = action.payload;
      })
      .addCase(getOneProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(deleteOneProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOneProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.delete = action.payload;
      })
      .addCase(deleteOneProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default progresSlice.reducer;
