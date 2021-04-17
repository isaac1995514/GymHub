import React, { useState } from "react";
import PropTypes from "prop-types";

/* Components */
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

/* Style */
import { useExerciseLogCardStyle, useExerciseSubCardStyle } from "./style";
import { useInputStyle } from "../../../assets/styleJs/component-style";

const ExerciseSubCard = (props) => {
  const { exercise, onUpdateField, index } = props;

  const classes = useExerciseSubCardStyle();
  const inputClasses = useInputStyle();

  const textFieldItems = [
    { label: "Exercise Name", key: "name" },
    { label: "Set", key: "set" },
    { label: "Reps", key: "reps" },
    { label: "Weight", key: "weight" },
    { label: "Notes", key: "notes" },
  ];

  return (
    <Paper className={classes.subCard} elevation={2}>
      <div className={classes.cardHeader}>{`Exercise ${index + 1}`}</div>
      <Divider className={classes.divider} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {textFieldItems.map(({ label, key }) => (
          <TextField
            key={`${key}-text-box`}
            label={label}
            value={exercise[key]}
            onChange={onUpdateField(key)}
            className={inputClasses.inputWrapper}
            InputProps={{ classes: { input: inputClasses.inputBox } }}
          />
        ))}
      </div>
    </Paper>
  );
};

export default function ExerciseLogCard(props) {
  const classes = useExerciseLogCardStyle();

  const { exercises, rest, erp } = props;

  const [exerciseList, setExerciseList] = useState(exercises);

  const updateField = (index) => (field) => (e) => {
    setExerciseList((prev) => {
      prev[index] = {
        ...prev[index],
        [field]: e.target.value,
      };

      return [...prev];
    });
  };

  return (
    <Paper className={classes.root} elevation={2}>
      {exerciseList.map((exerc, index) => (
        <ExerciseSubCard
          key={`exercise-sub-card-${index}`}
          exercise={exerc}
          index={index}
          onUpdateField={updateField(index)}
        />
      ))}
    </Paper>
  );
}
