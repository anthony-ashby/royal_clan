import React from "react";
import api from "./api";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    color: "#71ccdf",
    textAlign: "left",
  },
  customLink: {
    paddingTop: 2,
    paddingBottom: 2,
    color: "#71ccdf",
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#a44e62",
    },
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=10"
      );
      setActiveStreams(result.data.streams);
      console.log(result.data.streams);
    };
    fetchData();
  }, []);

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {activeStreams.map((stream) => (
          <ListItemLink
            key={stream._id}
            className={classes.root}
            href={stream.channel.url}
          >
            <ListItemText primary={stream.channel.display_name} />
            <ListItemText
              primary={stream.viewers}
              style={{ textAlign: "right", paddingRight: 10 }}
            />
            <VisibilityIcon fontSize="small" />
          </ListItemLink>
        ))}
      </List>
    </div>
  );
}

export default ActiveStreams;
