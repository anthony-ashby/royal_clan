import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2e3c45",
    height: "10vh",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    marginTop: "20px",
  },
});

function NavFooter() {
  const classes = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={1}></Col>
      <Col xs={10} className={classes.root}></Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default NavFooter;
