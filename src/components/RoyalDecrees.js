import React from "react";
import api from "./api";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    paddingTop: 25,
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
      <Divider className={classes.dividerStyle} />
      <div className={classes.header}>Royal Decrees (Announcements)</div>
      <Divider className={classes.dividerStyle} />
    </div>
  );
}

export default RoyalDecrees;
