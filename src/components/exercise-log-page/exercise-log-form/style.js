import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  exerciseItemList: {
    height: "calc(100% - 80px)",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    height: 50,
    backgroundColor: "rgba(93, 93, 93, 0.4192051820728291)",
    color: "#000000",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  },
  chipsList: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    width: "94%",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  inputBox: {
    fontSize: 14,
    height: 10,
    width: 150,
    padding: 10,
  },
}));

export { useStyles };
