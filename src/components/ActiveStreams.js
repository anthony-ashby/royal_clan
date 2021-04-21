import React from "react";
import api from "./api";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles({
  root: {
    paddingTop: 50,
  },
  listItem: {
    color: "#71ccdf",
    textAlign: "left",
  },
  customLink: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 3,
    color: "#71ccdf",
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#a44e62",
    },
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    color: "#71ccdf",
    fontSize: 20,
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function ListItemLink(props) {
  const classes = useStyles();
  return (
    <ListItem
      button
      component="a"
      {...props}
      target="_blank"
      className={classes.customLink}
    />
  );
}

function ActiveStreams() {
  const classes = useStyles();
  const [activeStreams, setActiveStreams] = useState([]);
  const [royalStreams, setRoyalStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=10"
      );
      setActiveStreams(result.data.streams);
      console.log(result.data.streams);
    };
    fetchData();
    setRoyalStreams([
      "don_artie",
      "royalclanaoe",
      "tadaoe",
      "daiywop",
      "antz_is_here",
      "TheJASSZ",
      "herbiemaster",
    ]);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>Live Streams</div>
      <List component="nav" aria-label="main mailbox folders">
        {activeStreams.map((stream) => (
          <div>
            {!royalStreams.includes(stream.channel.display_name) ? (
              <ListItemLink
                key={stream._id}
                className={classes.listItem}
                href={stream.channel.url}
              >
                <ListItemAvatar style={{ marginRight: -20 }}>
                  <Avatar
                    alt="Twitch Profile Image"
                    src={stream.channel.logo}
                    style={{ height: 25, width: 25 }}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={stream.channel.display_name}
                  style={{ textAlign: "left" }}
                />
                <ListItemText
                  primary={stream.viewers}
                  style={{ textAlign: "right", paddingRight: 5 }}
                />
                <VisibilityIcon fontSize="small" />
              </ListItemLink>
            ) : null}
          </div>
        ))}
      </List>
    </div>
  );
}

export default ActiveStreams;
