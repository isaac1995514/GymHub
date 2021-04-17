import { makeStyles } from "@material-ui/core/styles";

const useExerciseLogCardStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    height: 300,
  },
}));

const useExerciseSubCardStyle = makeStyles((theme) => ({
  subCard: {
    display: "flex",
    flexDirection: "column",
    height: "85%",
    margin: theme.spacing(2),
    padding: 8,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
    fontSize: 12,
  },
  divider: {
    marginTop: 2,
    marginBottom: 5,
  },
}));

export { useExerciseLogCardStyle, useExerciseSubCardStyle };
