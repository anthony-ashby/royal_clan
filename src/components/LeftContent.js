import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";

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
  header: {
    color: "#71ccdf",
    fontSize: 20,
    height: 75,
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function LeftContent() {
  const classes = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={11} className={classes.root}>
        <div className={classes.header}>Community Links, News, and Events</div>
        <Divider className={classes.dividerStyle} />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default LeftContent;
