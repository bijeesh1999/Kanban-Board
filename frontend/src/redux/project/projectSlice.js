import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProject,
  postProject,
  putOneProject,
  deleteOneProject,
  getOneProject,
  getMatchedProject,
} from "./projectApi";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    allProjects: [],
    matchProjects: [],
    post: [],
    singleProject: [],
    delete: [],
    edited: [],
    error: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProjects = action.payload;
      })
      .addCase(getAllProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================

      .addCase(getMatchedProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMatchedProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matchProjects = action.payload;
      })
      .addCase(getMatchedProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // =====================================================
      .addCase(postProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(postProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   =====================================================

      .addCase(putOneProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(putOneProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.edited = action.payload;
      })
      .addCase(putOneProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getOneProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProject = action.payload;
      })
      .addCase(getOneProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(deleteOneProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOneProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.delete = action.payload;
      })
      .addCase(deleteOneProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
