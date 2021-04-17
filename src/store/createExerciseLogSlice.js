import { createSlice } from "@reduxjs/toolkit";

/* Mock Data */
import { mockdata } from "./mock-data";

const sliceName = "createExerciseLogSlice";

const initialState = mockdata;

const createExerciseLogReducers = {};

export const createExerciseLogSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: createExerciseLogReducers,
});

export const {} = createExerciseLogSlice.actions;

export default createExerciseLogSlice.reducer;
