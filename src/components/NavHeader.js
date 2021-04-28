import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import headerImg from "../images/royal_header_background.jpg";
import logoImg from "../images/royal_clan_logo.png";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#2e3c45",
    marginTop: "15px",
    borderRadius: "15px",
  },
  heroContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImg})`,
    height: 200,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    position: "relative",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    "@media (max-width: 992px)": {
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundSize: "180%",
    },
  },
  logoImg: {
    height: "100%",
    borderRadius: "15px 0 0 15px",
    "@media (max-width: 992px)": {
      paddingTop: 10,
      borderRadius: "15px",
      height: 100,
      width: 100,
    },
  },
  heroContent: {
    width: "70%",
    padding: "10px",
    verticalAlign: "top",
    color: "#71ccdf",
    display: "inline-block",
    "@media (max-width: 992px)": {
      textAlign: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  aboutUsHeader: {
    width: "80%",
    "@media (max-width: 992px)": {
      textAlign: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  navButtonRow: {
    "@media (max-width: 992px)": {
      display: "none",
    },
  },

  buttonStyle: {
    textDecoration: "none!important",
    textTransform: "none!important",
    minWidth: "5vw",
    color: "#71ccdf",
    fontSize: 17,
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#a44e62",
    },
    "@media (max-width: 992px)": {
      fontSize: 10,
      paddingLeft: 5,
      paddingRight: 5,
      minWidth: "10vw !important",
    },
  },
  leftButton: {
    borderRadius: "5px 0 0 5px",
  },
  midButton: {
    borderRadius: "0",
  },
  rightButton: {
    borderRadius: "0 5px 5px 0",
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
  },
}));

function NavHeader() {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Row className={"no-gutters"}>
      <Col xs={1}></Col>
      <Col xs={10}>
        <Row className={"no-gutters"}>
          <Col xs={12} className={classes.root}>
            <div className={classes.heroContainer}>
              <img
                src={logoImg}
                alt={"royal logo"}
                className={classes.logoImg}
              />
              <div className={classes.heroContent}>
                <h1>Welcome To Royal Clan</h1>
                <p className={classes.aboutUsHeader}>
                  We are the RoyaL Clan. A largely active clan in Age of Empires
                  3 DE. We host tournaments, create Youtube guides, and are
                  dedicated to a fun and safe gaming community.
                </p>
                <Row className={clsx("no-gutters", classes.navButtonRow)}>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.leftButton)}
                    >
                      Home
                    </Button>
                  </Link>

                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/tournaments"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.midButton)}
                    >
                      Tournaments
                    </Button>
                  </Link>

                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/forums"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.midButton)}
                    >
                      Forums
                    </Button>
                  </Link>

                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/content"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.midButton)}
                    >
                      Content
                    </Button>
                  </Link>

                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/contact"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.midButton)}
                    >
                      Contact Us
                    </Button>
                  </Link>

                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/donate"} style={{ textDecoration: "none" }}>
                    <Button
                      className={clsx(classes.buttonStyle, classes.midButton)}
                    >
                      Donate
                    </Button>
                  </Link>

                  {currentUser ? null : (
                    <>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />

                      <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            `
                            ${currentUser ? "" : classes.rightButton}`
                          )}
                        >
                          Login
                        </Button>
                      </Link>
                    </>
                  )}

                  {currentUser ? (
                    <>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />

                      <Link
                        to={"/update-profile"}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
                        >
                          Update Profile
                        </Button>
                      </Link>

                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />

                      <Button
                        className={clsx(
                          classes.buttonStyle,
                          classes.rightButton
                        )}
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : null}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default NavHeader;
