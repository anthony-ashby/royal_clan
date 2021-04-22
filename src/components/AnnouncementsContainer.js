import React from "react";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import Announcement from "./Announcement";

const useStyles = makeStyles({
  root: {},
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
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function AnnouncementsContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerTxt}>Announcements</div>
      </div>
      <Announcement />
    </div>
  );
}

export default AnnouncementsContainer;
