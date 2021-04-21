import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import ActiveStreams from "./ActiveStreams";
import RoyalStreams from "./RoyalStreams";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2e3c45",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    marginTop: "20px",
    textAlign: "center",
  },
});

function RightContent() {
  const classes = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={1}></Col>
      <Col xl={11} xs={10} className={classes.root}>
        <RoyalStreams />
        <ActiveStreams />
      </Col>
      <Hidden only={["xl"]}>
        <Col xs={1}></Col>
      </Hidden>
    </Row>
  );
}

export default RightContent;
