import React from "react";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import RoyalDecree from "./RoyalDecree";

const useStyles = makeStyles({
  root: {},
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
  },
  headerTxt: {
    color: "#71ccdf",
    fontSize: 20,
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function RoyalDecreeContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerTxt}>Royal Decrees (Announcements)</div>
      </div>
      <RoyalDecree />
    </div>
  );
}

export default RoyalDecreeContainer;
