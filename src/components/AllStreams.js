import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import TwitchApi from "./apis/TwitchApi";
import BannerBackground from "../images/main_background.jpg";
import age3Icon from "../images/age3-icon.png";
import age4Icon from "../images/age4-icon.png";
import royalSealIcon from "../images/royalseal-icon.png";
import RoyalStreams from "./RoyalStreams";

const useStyles = makeStyles({
  root: {
    paddingTop: 25,
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
  logoImg: {
    height: 25,
  },
  button: {
    marginTop: 10,
    textDecoration: "none!important",
    textTransform: "none!important",
    minWidth: "5vw",
    height: 30,
    borderRadius: "0",
    backgroundColor: "#051429",
    "&:hover": {
      backgroundColor: "#71ccdf",
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

const AllStreams = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("age3");

  //All Streams
  const [allStreams, setAllStreams] = useState([]);
  const [activeAllStreamIDs, setActiveAllStreamIDs] = useState([]);

  //AOE3 Streams
  const [aoe3Streams, setAoe3Streams] = useState([]);
  const [activeAoe3StreamIDs, setActiveAoe3StreamIDs] = useState([]);

  //AOE4 Streams
  const [aoe4Streams, setAoe4Streams] = useState([]);
  const [activeAoe4StreamIDs, setActiveAoe4StreamIDs] = useState([]);

  useEffect(() => {
    const fetchAoe3StreamData = async () => {
      let streamIDs = [];
      const result = await TwitchApi.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=15"
      );
      result.data.streams.map((stream) => streamIDs.push(stream.channel._id));
      setAoe3Streams(result.data.streams);
      setActiveAoe3StreamIDs(streamIDs);
    };

    fetchAoe3StreamData();

    const fetchAoe4StreamData = async () => {
      let streamIDs = [];
      const result = await TwitchApi.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20IV&limit=15"
      );
      result.data.streams.map((stream) => streamIDs.push(stream.channel._id));
      setAoe4Streams(result.data.streams);
      setActiveAoe4StreamIDs(streamIDs);
    };

    fetchAoe4StreamData();
  }, []);

  useEffect(() => {
    if (
      aoe3Streams &&
      aoe4Streams &&
      activeAoe3StreamIDs &&
      activeAoe4StreamIDs
    ) {
      setAllStreams(aoe3Streams.concat(aoe4Streams));
      setActiveAllStreamIDs(activeAoe3StreamIDs.concat(activeAoe4StreamIDs));
    }
  }, [aoe3Streams, aoe4Streams, activeAoe3StreamIDs, activeAoe4StreamIDs]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>Top Streams</div>
      <Tooltip
        title="Age of Empires III"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={1200}
        enterNextDelay={1200}
      >
        <Button
          className={classes.button}
          style={
            activeTab === "age3"
              ? { borderBottom: "2px #71ccdf solid" }
              : { borderBottom: "none" }
          }
          onClick={() => setActiveTab("age3")}
        >
          <img src={age3Icon} alt={"age3 icon"} className={classes.logoImg} />
        </Button>
      </Tooltip>

      <Tooltip
        title="Age of Empires IV"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={1200}
        enterNextDelay={1200}
      >
        <Button
          className={classes.button}
          style={
            activeTab === "age4"
              ? { borderBottom: "2px #71ccdf solid" }
              : { borderBottom: "none" }
          }
          onClick={() => setActiveTab("age4")}
        >
          <img src={age4Icon} alt={"age4 icon"} className={classes.logoImg} />
        </Button>
      </Tooltip>

      <Tooltip
        title="Royal Clan Streamers"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={1200}
        enterNextDelay={1200}
      >
        <Button
          className={classes.button}
          style={
            activeTab === "royal"
              ? { borderBottom: "2px #71ccdf solid" }
              : { borderBottom: "none" }
          }
          onClick={() => setActiveTab("royal")}
        >
          <img
            src={royalSealIcon}
            alt={"royal seal icon"}
            className={classes.logoImg}
          />
        </Button>
      </Tooltip>

      {activeTab === "age3" && (
        <List component="nav" aria-label="Age of Empires 3 Streams">
          {aoe3Streams.map((stream) => (
            <div key={stream._id}>
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
            </div>
          ))}
        </List>
      )}

      {activeTab === "age4" && (
        <List component="nav" aria-label="Age of Empires 4 Streams">
          {aoe4Streams.map((stream) => (
            <div key={stream._id}>
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
            </div>
          ))}
        </List>
      )}

      {activeTab === "royal" && (
        <RoyalStreams
          allStreams={allStreams}
          activeAllStreamIDs={activeAllStreamIDs}
        />
      )}
    </div>
  );
};

export default AllStreams;
