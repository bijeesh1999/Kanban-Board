import { createSlice } from "@reduxjs/toolkit";
import { getAllAssignedTasks,postAssignedTask } from "./shareTaskApi";

const shareTaskSlice = createSlice({
  name: "assigned",
  initialState: {
    allAssigned: [],
    postAssgned:[],
    error: [],
    status: "idle",
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(postAssignedTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postAssignedTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postAssgned = action.payload;
      })
      .addCase(postAssignedTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

    //   =================================================

    .addCase(getAllAssignedTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAssignedTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allAssigned = action.payload;
      })
      .addCase(getAllAssignedTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export default shareTaskSlice.reducer
