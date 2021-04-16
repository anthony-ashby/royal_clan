import React from "react";
import "./styles/App.css";
import Main from "./Main";
import { makeStyles } from "@material-ui/styles";
// import royalHeaderImg from "../images/royal_header_background4.jpg";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#45748c",
    width: "100%",
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
