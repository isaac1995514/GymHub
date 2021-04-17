import React from "react";

/* Component */
import ExerciseLogPage from "../exercise-log-page/exercise-log-page";

/* Utils */
import classnames from "classnames";

/* Style */
import "./content-page.scss";

const ContentPage = (props) => {
  return (
    <div className={classnames("content-page-wrapper")}>
      <ExerciseLogPage />
    </div>
  );
};

export default ContentPage;
