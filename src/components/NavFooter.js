import React from "react";
import { Row, Col } from "reactstrap";
import { Button, Icon } from "@mui/material/";
import { makeStyles } from "tss-react/mui";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    height: "100%",
    borderRadius: "15px 15px 0 0",
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
    color: "#71ccdf",
    fontSize: 20,
  },
  discordButton: {
    backgroundColor: "rgb(114,137,218,0.5)",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(114,137,218,0.9)",
      color: "white",
    },
  },
  youtubeButton: {
    backgroundColor: "rgb(255,0,0,0.5)",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(255,0,0,0.9)",
      color: "white",
    },
  },
  twitchButton: {
    backgroundColor: "rgb(100,65,165,0.5)",
    color: "white",
    margin: 20,
    "&:hover": {
      backgroundColor: "rgb(100,65,165,0.9)",
      color: "white",
    },
  },
});

function NavFooter() {
  const { classes } = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
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
    </Row>
  );
}

export default NavFooter;
