import React from "react";
import { Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2e3c45",
    height: "100%",
    borderRadius: "15px 15px 0 0",
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
    color: "#71ccdf",
    fontSize: 20,
  },
  discordButton: {
    backgroundColor: "#7289da",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(114,137,218,0.5)",
      color: "white",
    },
  },
  youtubeButton: {
    backgroundColor: "#FF0000",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(255,0,0,0.5)",
      color: "white",
    },
  },
  twitchButton: {
    backgroundColor: "#6441A5",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(100,65,165,0.5)",
      color: "white",
    },
  },
});

function NavFooter() {
  const classes = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={1}></Col>
      <Col xs={10} className={classes.root}>
        <div className={classes.header}>Join Us!</div>
        <Row className={"no-gutters justify-center"}>
          <Col>
            <Button
              variant="contained"
              className={classes.discordButton}
              href="https://discord.gg/Bqnm7cqQpS"
              target="_blank"
              startIcon={
                <Icon className="fab fa-discord" style={{ fill: "white" }} />
              }
            >
              Discord
            </Button>
            <Button
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
              variant="contained"
              className={classes.twitchButton}
              href="https://www.twitch.tv/royalclanaoe"
              target="_blank"
              startIcon={
                <Icon className="fab fa-twitch" style={{ fill: "white" }} />
              }
            >
              Twitch
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default NavFooter;
