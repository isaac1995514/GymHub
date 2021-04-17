import React, { useState } from "react";
import { useSelector } from "react-redux";

/* Components */
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ExerciseLogCard from "../exercise-log-card";

/* Style */
import { useStyles } from "./style";
import classnames from "classnames";

import "./style.scss";

export default function ExerciseLogForm() {
  // Exercise Log that is currently filling
  const exerciseLog = useSelector((state) => state.createExerciseLog);

  const classes = useStyles();

  /* Exercise Type of this Exercise Log */
  const [exerciseType, setExerciseType] = useState({
    Chest: false,
    Back: false,
    Leg: false,
    Bicep: false,
    Tricep: false,
    Shoulder: false,
    Upper: false,
  });

  const exerciseLogList = exerciseLog.exerciseSets;

  /* Selecting / Deselecting a chip */
  const handleChipClick = (type) => (e) => {
    setExerciseType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <>
      <div
        key={"exercise-type-bar"}
        className={classnames("exercise-type-selection-bar")}
      >
        <Paper className={classes.root}>
          <div className={classes.chipsList}>
            {Object.keys(exerciseType).map((type) => (
              <li key={`muscle-type-${type}-key`}>
                <Chip
                  label={type}
                  className={classes.chip}
                  color={exerciseType[type] ? "primary" : "default"}
                  onClick={handleChipClick(type)}
                />
              </li>
            ))}
          </div>
        </Paper>
      </div>
      <div
        key={"exercise-item-list"}
        className={classnames("exercise-item-list")}
      >
        {exerciseLogList.map((log, index) => (
          <ExerciseLogCard key={`exercise-log-${index}`} {...log} />
        ))}
      </div>
    </>
  );
}
