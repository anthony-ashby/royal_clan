import React from "react";
import { useState, useEffect } from "react";
import MainContent from "../components/MainContent";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RoyalHelterSkelter from "../images/helter_skelter_announcement.jpg";
import Tournament from "../views/Tournament";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
  customCard: {
    width: "auto",
    margin: 25,
    backgroundColor: "#45748c",
    color: "#071a33",
  },
  customCardMedia: {
    height: "200px",
  },
});

function Tournament1() {
  return <h2>Tournament1</h2>;
}

function Tournament2() {
  return <h2>Tournament2</h2>;
}

function Tournament3() {
  return <h2>Tournament3</h2>;
}

function TournamentsContainer() {
  const classes = useStyles();
  const [showThumbnails, setShowThumbnails] = useState(true);
  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>

        <Col xl={8} xs={12}>
          <Row className={"no-gutters"}>
            <Col xs={1}></Col>
            <Col xl={12} xs={10} className={classes.root}>
              <div>
                <div className={classes.header}>
                  <div className={classes.headerTxt}>Tournaments</div>
                </div>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Col>

        <Col xl={2} xs={12}>
          <RightContent />
        </Col>

        <Col xl={1}></Col>
      </Row>
      <Router>
        <div>
          <Row className={"no-gutters"}>
            <Col xs={12}>
              <NavHeader />
            </Col>
          </Row>

          <Switch>
            <Route path="/2v2helterskelter">
              <Tournament />
            </Route>
            <Route path="/tournament2">
              <Tournament2 />
            </Route>
            <Route path="/tournament3">
              <Tournament3 />
            </Route>
          </Switch>

          <Row className={"no-gutters"}>
            <Col xs={12}>
              <NavFooter />
            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default TournamentsContainer;
