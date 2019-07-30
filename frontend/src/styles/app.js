import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    paddingTop: 60,
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  paperModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: 6,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    color: "#fff",
    fontWeight: "bold"
  },
  error: {
    background: "red",
    padding: 10,
    color: "#fff"
  },
  success: {
    background: "green",
    padding: 10,
    color: "#fff"
  }
}));

export const theme = createMuiTheme({
  palette: {
    primary: green
  }
});
