import React, { useState } from "react";

/* Components */
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

/* Style */
import { useExerciseLogPanelStyle } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    maxWidth: 300,
    margin: theme.spacing(0.5),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  details: {
    fontSize: 15,
    marginBottom: 12,
  },
  cardAction: {
    flexDirection: "row-reverse",
  },
  iconButton: {
    padding: 8,
  },
}));

const ExerciseCard = (props) => {
  const { exercise, index } = props;

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const textFieldItems = [
    { label: "Exercise Name", key: "name" },
    { label: "Set", key: "set" },
    { label: "Reps", key: "reps" },
    { label: "Weight", key: "weight" },
    { label: "Notes", key: "notes" },
  ];

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {exercise.name}
        </Typography>
        <Typography className={classes.details} color="textSecondary">
          {`${exercise.weight} lbs`} {bull} {`${exercise.set} Sets`} {bull}
          {exercise.reps.join(", ")}
        </Typography>
        <Typography variant="body2" component="p">
          {exercise.notes}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: classes.cardAction }}>
        <IconButton aria-label="delete" classes={{ root: classes.iconButton }}>
          <UpdateIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" classes={{ root: classes.iconButton }}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

function ExerciseLogPanel(props) {
  const exerciseLogPanelClasses = useExerciseLogPanelStyle();

  const { exercises, rest, erp } = props;

  return (
    <Paper className={exerciseLogPanelClasses.root} elevation={2}>
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={`exercise-card-${index}`}
          exercise={exercise}
          index={index}
        />
      ))}
    </Paper>
  );
}

export default function ExerciseLogItemList(props) {
  const { exerciseLogItems } = props;

  return (
    <>
      {exerciseLogItems.map((item, index) => (
        <ExerciseLogPanel key={index} {...item} />
      ))}
    </>
  );
}
