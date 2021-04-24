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
import Icon from "@material-ui/core/Icon";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";

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
  buttonContainer: {
    textAlign: "left",
    marginTop: 25,
    marginLeft: 25,
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

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#071a33",
    backgroundColor: "#45748c",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#45748c",
    },
  },
}))(Button);

function Tournaments() {
  const classes = useStyles();
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [showTournament, setShowTournament] = useState(false);
  const openTournament = () => {
    setShowThumbnails(false);
    setShowTournament(true);
  };
  const closeTournament = () => {
    setShowThumbnails(true);
    setShowTournament(false);
  };
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

                {showTournament ? (
                  <div className={classes.buttonContainer}>
                    <ColorButton
                      variant="contained"
                      color="primary"
                      className={classes.margin}
                      startIcon={<ArrowBackIcon />}
                      onClick={() => closeTournament()}
                    >
                      Back to Tournaments
                    </ColorButton>
                  </div>
                ) : null}

                <Router>
                  <div>
                    {showThumbnails ? (
                      <Row className={"no-gutters"}>
                        <Col xl={4} xs={12}>
                          <Link
                            to="/2v2helterskelter"
                            style={{ textDecoration: "none" }}
                            onClick={() => openTournament()}
                          >
                            <Card className={classes.customCard}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.customCardMedia}
                                  image={RoyalHelterSkelter}
                                  title="Royal Helter Skelter"
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    Royal 2v2 Helter Skelter
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                  >
                                    Royal Clan and Elite Gaming Channel join
                                    together to bring you the Helter Skelter, a
                                    first-of-its-kind 2v2 tournament with random
                                    maps, civilizations, and teams! Click the
                                    arrow below for more information.
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Link>
                        </Col>
                      </Row>
                    ) : null}

                    {showTournament ? (
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
                    ) : null}
                  </div>
                </Router>
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
    </div>
  );
}

export default Tournaments;
