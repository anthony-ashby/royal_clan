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
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#2e3c45",
    marginTop: "15px",
    borderRadius: "15px",
  },
  heroContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95)), url(${headerImg})`,
    height: 200,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    position: "relative",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    "@media (max-width: 992px)": {
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundSize: "180%",
    },
  },
  logoImg: {
    height: 200,
    width: "80%",
    marginRight: "20%",
    borderRadius: "15px 0 0 15px",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },
  heroContent: {
    width: "100%",
    padding: "10px",
    verticalAlign: "top",
    color: "#71ccdf",
    display: "inline-block",
    "@media (max-width: 1200px)": {
      textAlign: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  socialLinks: {
    backgroundColor: "#111821",
    height: 200,
    width: "80%",
    borderRadius: "0 15px 15px 0",
    marginLeft: "20%",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },
  aboutUsHeader: {
    marginLeft: "10%",
    width: "80%",
    "@media (max-width: 1200px)": {
      marginLeft: "0",
      width: "100%",
    },
  },
  navButtonRow: {
    // "@media (max-width: 1200px)": {
    //   display: "none",
    // },
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
  discordButton: {
    backgroundColor: "rgb(114,137,218,0.5)",
    color: "white",
    marginTop: 25,
    width: "70%",
    "&:hover": {
      backgroundColor: "rgb(114,137,218,0.9)",
      color: "white",
    },
  },
  youtubeButton: {
    backgroundColor: "rgb(255,0,0,0.5)",
    color: "white",
    marginTop: 25,
    width: "70%",
    "&:hover": {
      backgroundColor: "rgb(255,0,0,0.9)",
      color: "white",
    },
  },
  twitchButton: {
    backgroundColor: "rgb(100,65,165,0.5)",
    color: "white",
    marginTop: 25,
    width: "70%",
    "&:hover": {
      backgroundColor: "rgb(100,65,165,0.9)",
      color: "white",
    },
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
              <Row className={"no-gutters"}>
                <Col xs={2}>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <img
                      src={logoImg}
                      alt={"royal logo"}
                      className={classes.logoImg}
                    />
                  </Link>
                </Col>
                <Col xs={8}>
                  <div className={classes.heroContent}>
                    <h1>Welcome To Royal Clan</h1>
                    <p className={classes.aboutUsHeader}>
                      We are the RoyaL Clan. A largely active clan in Age of
                      Empires 3 DE. We host tournaments, create Youtube guides,
                      and are dedicated to a fun and safe gaming community.
                    </p>
                    <Row
                      className={clsx(
                        "no-gutters, justify-content-center",
                        classes.navButtonRow
                      )}
                    >
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.leftButton
                          )}
                        >
                          Home
                        </Button>
                      </Link>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <Link
                        to={"/tournaments"}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
                        >
                          Tournaments
                        </Button>
                      </Link>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      {/* <Link to={"/forums"} style={{ textDecoration: "none" }}>
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
                  /> */}
                      <Link to={"/content"} style={{ textDecoration: "none" }}>
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
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
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
                        >
                          Contact Us
                        </Button>
                      </Link>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <Link to={"/merch"} style={{ textDecoration: "none" }}>
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
                        >
                          Merch
                        </Button>
                      </Link>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <Link to={"/donate"} style={{ textDecoration: "none" }}>
                        <Button
                          className={clsx(
                            classes.buttonStyle,
                            classes.midButton
                          )}
                        >
                          Donate
                        </Button>
                      </Link>
                      {/* {currentUser ? null : (
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
                  )} */}
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
                </Col>
                <Col xs={2}>
                  <div className={classes.socialLinks}>
                    <Row className={"no-gutters justify-center"}>
                      <Col>
                        <Button
                          size="small"
                          variant="contained"
                          className={classes.discordButton}
                          href="https://discord.gg/Bqnm7cqQpS"
                          target="_blank"
                          startIcon={
                            <Icon
                              className="fab fa-discord"
                              style={{ fill: "white" }}
                            />
                          }
                        >
                          Discord
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          className={classes.youtubeButton}
                          href="https://www.youtube.com/channel/UCVygB-argZJ4hdEipSSBkrQ"
                          target="_blank"
                          startIcon={
                            <Icon
                              className="fab fa-youtube-square"
                              style={{ fill: "white" }}
                            />
                          }
                        >
                          YouTube
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          className={classes.twitchButton}
                          href="https://www.twitch.tv/royalclanaoe"
                          target="_blank"
                          startIcon={
                            <Icon
                              className="fab fa-twitch"
                              style={{ fill: "white" }}
                            />
                          }
                        >
                          Twitch
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default NavHeader;
