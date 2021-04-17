import { makeStyles } from "@material-ui/core/styles";

export const useInputStyle = makeStyles((theme) => ({
  inputWrapper: {
    marginBottom: 4,
  },
  inputBox: {
    fontSize: 12,
    height: 10,
    width: 150,
    paddingTop: 10,
    paddingBottom: 7,
  },
  inputLabel: {
    fontSize: 15,
  },
}));
