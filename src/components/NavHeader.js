import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import headerImg from "../images/royal_header_background.jpg";
import logoImg from "../images/royal_logo.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#2e3c45",
    marginTop: "15px",
    borderRadius: "15px",
  },
  heroImg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImg})`,
    height: 200,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    position: "relative",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
  },
  logoImg: {
    height: "100%",
    borderRadius: "15px 0 0 15px",
  },
  heroTxt: {
    width: "50%",
    padding: "10px",
    verticalAlign: "top",
    color: "#71ccdf",
    display: "inline-block",
    "@media (max-width: 960px)": {
      width: "50vw",
    },
  },
  navButtonRow: {
    "@media (max-width: 960px)": {
      paddingTop: "15px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  buttonStyle: {
    textDecoration: "none!important",
    textTransform: "none!important",
    minWidth: "5vw",
    color: "#71ccdf",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#a44e62",
    },
    "@media (max-width: 960px)": {
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
  return (
    <Row className={"no-gutters"}>
      <Col xs={12}>
        <Row className={"no-gutters"}>
          <Col xs={12} className={classes.root}>
            <div className={classes.heroImg}>
              <img src={logoImg} className={classes.logoImg} />
              <div className={classes.heroTxt}>
                <h1>Welcome To Royal Clan</h1>
                <p>
                  We are the RoyaL Clan. A largely active clan in Age of Empires
                  3 DE. We host tournaments, create Youtube guides, and are
                  dedicated to a fun and safe gaming community.
                </p>
                <Row className={clsx("no-gutters", classes.navButtonRow)}>
                  <Button
                    className={clsx(classes.buttonStyle, classes.leftButton)}
                  >
                    Home
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.midButton)}
                  >
                    Tournaments
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.midButton)}
                  >
                    Forums
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.midButton)}
                  >
                    Content
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.midButton)}
                  >
                    Join
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.midButton)}
                  >
                    Contact Us
                  </Button>
                  <Divider
                    className={classes.dividerStyle}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    className={clsx(classes.buttonStyle, classes.rightButton)}
                  >
                    Donate
                  </Button>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NavHeader;
