import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import ActiveStreams from "./ActiveStreams";
import RoyalStreams from "./RoyalStreams";
import Hidden from "@material-ui/core/Hidden";
import { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BannerBackground from "../images/main_background.jpg";
import Announcement from "./Announcement";
import { useAuth } from "../contexts/AuthContext";

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
  const [openModal, setOpenModal] = React.useState(false);
  const { currentUser } = useAuth();

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const ColorButtonGreen = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#57b570",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#57b570",
      },
    },
  }))(Button);

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
