import React from "react";
import api from "./api";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
  },
  header: {
    color: "#71ccdf",
    fontSize: 20,
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function RoyalDecrees() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>Royal Decrees (Announcements)</div>
    </div>
  );
}

export default RoyalDecrees;
