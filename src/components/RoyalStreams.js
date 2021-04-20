import React from "react";
import api from "./api";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Divider from "@material-ui/core/Divider";
import logoImg from "../images/royal_logo.JPG";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

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
    color: "#71ccdf",
    fontSize: 20,
  },
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
  customSwitchGroup: {
    paddingTop: 10,
    alignContent: "center",
    color: "#71ccdf",
  },
  customSwitch: {
    "&$checked": {
      color: "#71ccdf",
    },
  },
});

const CustomSwitch = withStyles({
  switchBase: {
    color: "#71ccdf",
    "&$checked": {
      color: "#71ccdf",
    },
    "&$checked + $track": {
      backgroundColor: "#71ccdf",
    },
  },
  checked: {},
  track: {},
})(Switch);

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

function RoyalStreams() {
  const classes = useStyles();
  const [activeStreams, setActiveStreams] = useState([]);
  const [activeStreamIDs, setActiveStreamIDs] = useState([]);
  const [offlineStreams, setOfflineStreams] = useState([]);
  const [royalStreams, setRoyalStreams] = useState([]);
  const [showOfflineChannels, setShowOfflineChannels] = useState(false);
  const [offlineChannelsQuery, setOfflineChannelsQuery] = useState("");

  useEffect(() => {
    setRoyalStreams([
      "don_artie",
      "royalclanaoe",
      "tadaoe",
      "daiywop",
      "antz_is_here",
    ]);

    const royalStreamsString =
      "royalclanaoe,don_artie,antz_is_here,tadaoe,daiywop";

    const fetchLiveStreamData = async () => {
      let streamIDs = [];
      const result = await api.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=15"
      );
      result.data.streams.map((stream) => {
        streamIDs.push(stream.channel._id);
      });
      setActiveStreams(result.data.streams);
      setActiveStreamIDs(streamIDs);
    };

    const fetchOfflineStreamDataFromTwitch = async () => {
      const result = await api.get(
        `https://api.twitch.tv/kraken/users?login=${royalStreamsString}`
      );
      setOfflineStreams(result.data.users);
    };

    fetchLiveStreamData();
    fetchOfflineStreamDataFromTwitch();
  }, []);

  const handleChange = (event) => {
    console.log(offlineStreams);
    console.log(activeStreamIDs);
    setShowOfflineChannels(!showOfflineChannels);
  };

  return (
    <div className={classes.root}>
      <Divider className={classes.dividerStyle} />
      <div className={classes.header}>Royal Streams</div>
      <Divider className={classes.dividerStyle} />
      <FormGroup className={classes.customSwitchGroup}>
        <FormControlLabel
          control={
            <CustomSwitch
              checked={showOfflineChannels}
              onChange={handleChange}
              size="small"
              name="checkedA"
            />
          }
          label="Show Offline Channels"
        />
      </FormGroup>
      <List component="nav">
        {activeStreams.map((stream) => (
          <div>
            {royalStreams.includes(stream.channel.display_name) ? (
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
        {showOfflineChannels ? (
          <div>
            {offlineStreams.map((offlineStream) => (
              <div>
                {!activeStreamIDs.includes(parseInt(offlineStream._id)) ? (
                  <ListItemLink
                    key={offlineStream._id}
                    className={classes.listItem}
                    href={`https://www.twitch.tv/${offlineStream.display_name}`}
                  >
                    <ListItemAvatar style={{ marginRight: -20 }}>
                      <Avatar
                        alt="Twitch Profile Image"
                        src={offlineStream.logo}
                        style={{ height: 25, width: 25 }}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={offlineStream.display_name}
                      style={{ textAlign: "left" }}
                    />
                    <VisibilityOffIcon fontSize="small" />
                  </ListItemLink>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </List>
    </div>
  );
}

export default RoyalStreams;
