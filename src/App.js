import React from "react";
import "./styles/App.css";
import Main from "./Main";
import { makeStyles } from "@material-ui/styles";
import { AuthProvider } from "./contexts/AuthContext";

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
    <AuthProvider>
      <div className={classes.root}>
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
