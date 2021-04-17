import React from "react";
import PropTypes from "prop-types";

/* Components */
import { Paper } from "@material-ui/core";
import ExerciseLogForm from "./exercise-log-form";

/* Utils */
import classnames from "classnames";

/* Style */
import "./exercise-log-page.scss";

const ExerciseLogPage = (props) => {
  return (
    <div className={classnames("exercise-log-page-wrapper")}>
      <div className={classnames("exercise-log-form")}>
        <ExerciseLogForm />
      </div>
      <div className={classnames("previous-exercise-log-list")}>
        <Paper />
      </div>
    </div>
  );
};

export default ExerciseLogPage;
