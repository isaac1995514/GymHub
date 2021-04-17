import { createSlice } from "@reduxjs/toolkit";

export const createExerciseLogSlice = createSlice({
  name: "createExerciseLogSlice",
  initialState: {
    exerciseLog: {},
  },
  reducers: {},
});

export const {} = createExerciseLogSlice.actions;

export default createExerciseLogSlice.reducer;
