import { makeStyles } from "@material-ui/core/styles";

const useExerciseLogPanelStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    padding: "7px",
  },
}));

export { useExerciseLogPanelStyle };
