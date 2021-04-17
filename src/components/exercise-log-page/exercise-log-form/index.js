import React, { useState } from "react";

/* Components */
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ExerciseLogCard from "../exercise-log-card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

/* Style */
import { useStyles } from "./style";

import { mockdata } from "./mock-data";

const ExerciseType = {
  Chest: "Chest",
  Back: "Back",
  Leg: "Leg",
  Bicep: "Bicep",
  Tricep: "Tricep",
  Shoulder: "Shoulder",
};

export default function ExerciseLogForm(props) {
  const { exerciseLog = mockdata } = props;

  const classes = useStyles();

  /* Exercise Type of this Exercise Log */
  const [exerciseType, setExerciseType] = useState(
    exerciseLog?.muscleParts || []
  );

  /* Exercise Log Lits */
  const [exerciseLogList, setExerciseLogList] = useState(
    exerciseLog.exerciseSets
  );

  /* Add Exercise Type Anchor Menu */
  const [exerciseTypeMenuAnchor, setExerciseTypeMenuAnchor] = useState(null);

  const handleMenuClose = () => {
    setExerciseTypeMenuAnchor(null);
  };

  /* Remove Exercise Type */
  const handleDelete = (chipToDelete) => () => {
    setExerciseType((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleExerciseTypeSelect = (type) => () => {
    setExerciseType((prev) => [...prev, type]);
  };

  return (
    <>
      <div key={"exercise-type-bar"} className={classes.exerciseBar}>
        <Paper className={classes.root}>
          <div className={classes.chipsList}>
            {exerciseType.map((type) => (
              <li key={`muscle-type-${type}-key`}>
                <Chip
                  label={type}
                  onDelete={handleDelete(type)}
                  className={classes.chip}
                />
              </li>
            ))}
          </div>
          <div className="exercise-type-add-button">
            <Fab
              size="small"
              color="inherit"
              aria-label="add"
              onClick={(e) => setExerciseTypeMenuAnchor(e.currentTarget)}
            >
              <AddIcon />
            </Fab>
            <Menu
              id="Exercise Type Menu"
              anchorEl={exerciseTypeMenuAnchor}
              getContentAnchorEl={null}
              keepMounted
              open={Boolean(exerciseTypeMenuAnchor)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              onClose={handleMenuClose}
            >
              {Object.values(ExerciseType)
                .filter((type) => !exerciseType.includes(type))
                .map((type) => (
                  <MenuItem
                    key={`${type}-exercise-type-key`}
                    onClick={handleExerciseTypeSelect(type)}
                  >
                    {type}
                  </MenuItem>
                ))}
            </Menu>
          </div>
        </Paper>
      </div>
      <div key={"exercise-item-list"} className={classes.exerciseItemList}>
        {exerciseLogList.map((log, index) => (
          <ExerciseLogCard key={`exercise-log-${index}`} {...log} />
        ))}
      </div>
    </>
  );
}
