import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "tss-react/mui";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#2e3c45",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
    marginTop: "20px",
    textAlign: "center",
  },
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
});

const Loading = () => {
  const { classes } = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTxt}>Loading...</div>
        </div>
      </Col>
    </Row>
  );
};

export default Loading;
