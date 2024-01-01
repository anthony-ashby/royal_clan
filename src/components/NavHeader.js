import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "tss-react/mui";
import { Button, Divider, Icon } from "@mui/material";
import headerImg from "../images/royal_header_background.jpg";
import logoImg from "../images/royal_clan_logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles()({
  root: {
    height: "100%",
    backgroundColor: "#2e3c45",
    marginTop: "15px",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
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
    width: 200,
    borderRadius: "15px 0 0 15px",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },
  heroContent: {
    textAlign: "center",
    alignItems: "center",
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
  socialLinksContainer: {
    display: "flex",
    justifyContent: "right",
  },
  socialLinks: {
    textAlign: "center",
    backgroundColor: "#111821",
    height: 200,
    width: 200,
    borderRadius: "0 15px 15px 0",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },
  aboutUsHeader: {
    margin: "auto",
    width: "50%",
    marginBottom: "10px",
    "@media (max-width: 1200px)": {
      marginLeft: "0",
      width: "100%",
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
      color: "#051429",
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
});

function NavHeader({ pages }) {
  const { classes, cx } = useStyles();
  const [customPages, setCustomPages] = useState([]);

  useEffect(() => {
    if (pages && pages.length !== 0) {
      setCustomPages(pages);
    }
  }, [pages]);

  return (
    <Row className={"no-gutters"}>
      <Col xs={12}>
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
                    <Row className={"no-gutters, justify-content-center"}>
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <Button
                          className={cx(
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
                          className={cx(classes.buttonStyle, classes.midButton)}
                        >
                          Tournaments
                        </Button>
                      </Link>
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <Link to={"/content"} style={{ textDecoration: "none" }}>
                        <Button
                          className={cx(classes.buttonStyle, classes.midButton)}
                        >
                          Content
                        </Button>
                      </Link>
                      {/* <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <Link to={"/contact"} style={{ textDecoration: "none" }}>
                        <Button
                          className={cx(classes.buttonStyle, classes.midButton)}
                        >
                          Contact Us
                        </Button>
                      </Link> */}
                      <Divider
                        className={classes.dividerStyle}
                        orientation="vertical"
                        flexItem
                      />
                      <a
                        href="https://royal-clan-2.creator-spring.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className={cx(
                            classes.buttonStyle,
                            customPages
                              ? classes.midButton
                              : classes.rightButton
                          )}
                        >
                          Merch
                        </Button>
                      </a>

                      {customPages &&
                        customPages.map((page, idx) => {
                          if (page.showInNav) {
                            return (
                              <React.Fragment key={page._id}>
                                <Divider
                                  className={classes.dividerStyle}
                                  orientation="vertical"
                                  flexItem
                                />
                                <Link
                                  to={`/${page.pageName.toLowerCase()}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    className={cx(
                                      classes.buttonStyle,
                                      customPages.length - 1 === idx
                                        ? classes.rightButton
                                        : classes.midButton
                                    )}
                                  >
                                    {page.pageName}
                                  </Button>
                                </Link>
                              </React.Fragment>
                            );
                          }
                          return null;
                        })}
                    </Row>
                  </div>
                </Col>
                <Col xs={2} className={classes.socialLinksContainer}>
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
    </Row>
  );
}

export default NavHeader;
