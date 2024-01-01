import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "tss-react/mui";
import CommunityLinks from "./CommunityLinks";
import Merchandise from "./Merchandise";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
    marginTop: "20px",
    textAlign: "center",
    top: "20px",
    position: "sticky",
    alignSelf: "flex-start",
  },
});

function LeftContent() {
  const { classes } = useStyles();
  return (
    <Row className={"no-gutters"} style={{ display: "flex", height: "100%" }}>
      <Col xl={11} xs={10} className={classes.root}>
        <CommunityLinks />
        <Merchandise />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default LeftContent;
