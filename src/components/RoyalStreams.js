import React from "react";
import TwitchApi from "./apis/TwitchApi";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import BannerBackground from "../images/main_background.jpg";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useAuth } from "../contexts/AuthContext";

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
  headerText: {
    display: "inline-block",
    float: "center",
  },
  customSwitchGroup: {
    marginTop: 10,
    display: "inline-block",
    float: "center",
    color: "#71ccdf",
  },
  customSwitch: {
    "&$checked": {
      color: "#71ccdf",
    },
  },
  checked: {},
});

const CustomSwitch = withStyles({
  switchBase: {
    color: "#71ccdf",
    "&$checked": {
      color: "#a44e62",
    },
    "&$checked + $track": {
      backgroundColor: "#a44e62",
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

  const [dbUpdatePending, setDbUpdatePending] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const { currentUser } = useAuth();
  const [showAddFormError, setAddShowFormError] = useState(false);
  const [showModifyFormError, setShowModifyFormError] = useState(false);
  const [showDeleteFormError, setShowDeleteFormError] = useState(false);
  const [modifyLink, setModifyLink] = React.useState("");
  const [modifyLinkObject, setModifyLinkObject] = React.useState({});
  const [deleteLink, setDeleteLink] = React.useState("");
  const [deleteLinkObject, setDeleteLinkObject] = React.useState({});
  const [modalTab, setModalTab] = React.useState(0);

  useEffect(() => {
    setRoyalStreams([
      "don_artie",
      "royalclanaoe",
      "TADaoe",
      "daiywop",
      "antz_is_here",
      "TheJASSZ",
      "herbiemaster",
    ]);
  }, []);

  useEffect(() => {
    const royalStreamsString =
      "royalclanaoe,don_artie,antz_is_here,TADaoe,daiywop,herbiemaster,thejassz";

    const fetchLiveStreamData = async () => {
      let streamIDs = [];
      const result = await TwitchApi.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=15"
      );
      result.data.streams.map((stream) => streamIDs.push(stream.channel._id));
      setActiveStreams(result.data.streams);
      setActiveStreamIDs(streamIDs);
    };

    const fetchOfflineStreamDataFromTwitch = async () => {
      const result = await TwitchApi.get(
        `https://api.twitch.tv/kraken/users?login=${royalStreamsString}`
      );
      setOfflineStreams(result.data.users);
    };

    fetchLiveStreamData();
    fetchOfflineStreamDataFromTwitch();
  }, [royalStreams]);

  const handleChange = (event) => {
    setShowOfflineChannels(!showOfflineChannels);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerText}>Royal Streams</div>
      </div>
      <FormGroup className={classes.customSwitchGroup}>
        <FormControlLabel
          label="Show Offline Channels"
          labelPlacement="start"
          control={
            <CustomSwitch
              checked={showOfflineChannels}
              onChange={handleChange}
              size="small"
              name="checkedA"
            />
          }
        />
      </FormGroup>

      <List component="nav">
        {activeStreams.map((stream) => (
          <div key={stream._id}>
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
              <div key={offlineStream._id}>
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
