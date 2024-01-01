import React from "react";
import "./styles/App.css";
import Main from "./Main";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#051429",
    width: "100%",
    height: "100%",
    padding: "0px 30px",
  },
});

function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
