import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTask,
  postTask,
  putOneTask,
  deleteOneTask,
  getOneTask,
  getMatcheTasks,
} from "./taskApi";

const taskSlice = createSlice({
  name: "Datas",
  initialState: {
    allData: [],
    matchTasks: [],
    post: [],
    singleData: [],
    delete: [],
    edited: [],
    error: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allData = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================

      .addCase(getMatcheTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMatcheTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matchTasks = action.payload;
      })
      .addCase(getMatcheTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================
      .addCase(postTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(postTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   =====================================================

      .addCase(putOneTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(putOneTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.edited = action.payload;
      })
      .addCase(putOneTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getOneTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleData = action.payload;
      })
      .addCase(getOneTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(deleteOneTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOneTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.delete = action.payload;
      })
      .addCase(deleteOneTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
