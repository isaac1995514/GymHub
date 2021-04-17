import { configureStore } from "@reduxjs/toolkit";

/* Slices */
import createExerciseLogReducer from "./createExerciseLogSlice";

export default configureStore({
  reducer: {
    createExerciseLog: createExerciseLogReducer,
  },
});
