import React, { useState, useEffect } from "react";
import BannerBackground from "../../images/main_background.jpg";
import age3Icon from "../../images/age3-icon.png";
import age4Icon from "../../images/age4-icon.png";
import royalSealIcon from "../../images/royalseal-icon.png";
import { getUsers, getLiveStreams } from "../../apis/TwitchApi";
import { getRoyalTwitchChannels } from "../../sanityClient";
import { makeStyles } from "tss-react/mui";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  List,
  ListItemButton,
  ListItemText,
  Switch,
  FormGroup,
  FormControlLabel,
  ListItemAvatar,
  Avatar,
  Button,
  Tooltip,
  Zoom,
} from "@mui/material";

const useStyles = makeStyles()({
  root: {
    paddingTop: 25,
  },
  listItem: {
    color: "#71ccdf",
    textAlign: "left",
  },
  listButton: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 3,
    color: "#71ccdf",
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#051429",
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
  customSwitchGroup: {
    marginTop: 10,
    display: "inline-block",
    float: "center",
    color: "#71ccdf",
  },
  button: {
    marginTop: 10,
    textDecoration: "none!important",
    textTransform: "none!important",
    minWidth: "Calc(100% / 3)",
    height: 30,
    borderRadius: "0",
    backgroundColor: "#051429",
    "&:hover": {
      backgroundColor: "#71ccdf",
    },
  },
});

const StreamsPanel = ({ twitchAccessToken }) => {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState("AOE3");
  const [liveStreams, setLiveStreams] = useState([]);
  const [royalTwitchUsers, setRoyalTwitchUsers] = useState([]);
  const [royalLiveStreams, setRoyalLiveStreams] = useState([]);
  const [royalOfflineChannels, setRoyalOfflineChannels] = useState([]);
  const [showOfflineChannels, setShowOfflineChannels] = useState(false);

  useEffect(() => {
    if (twitchAccessToken && twitchAccessToken.length !== 0) {
      fetchLiveStreamData();
      fetchRoyalTwitchUsers();
    }
  }, [twitchAccessToken]);

  useEffect(() => {
    if (liveStreams.length > 0 && royalTwitchUsers.length > 0) {
      const royalLive = [];
      const royalOffline = [];
      royalTwitchUsers.forEach((royalUsr) => {
        const liveIdx = liveStreams.findIndex(
          (stream) => stream.user_id === royalUsr.user_id
        );
        if (liveIdx !== -1) {
          const foundStream = liveStreams[liveIdx];
          royalLive.push(foundStream);
        } else {
          royalOffline.push(royalUsr);
        }
      });
      setRoyalLiveStreams(royalLive);
      setRoyalOfflineChannels(royalOffline);
    }
  }, [liveStreams, royalTwitchUsers]);

  const handleChange = () => {
    setShowOfflineChannels(!showOfflineChannels);
  };

  const fetchLiveStreamData = async () => {
    await getLiveStreams({
      headers: {
        Authorization: `Bearer ${twitchAccessToken}`,
      },
    })
      .then((res) => {
        const streamsRes = res.data.data;
        const streamData = [];
        let usersUrl = "";
        let aoe3Count = 0;
        let aoe4Count = 0;
        streamsRes.forEach((stream) => {
          const game = stream.game_id === "7830" ? "AOE3" : "AOE4";
          const newStream = {
            user_id: stream.user_id,
            url: "https://www.twitch.tv/" + stream.user_name,
            viewer_count: stream.viewer_count,
            title: stream.title,
            game,
          };
          if (game === "AOE3" && aoe3Count < 15) {
            usersUrl += "&id=" + stream.user_id;
            streamData.push(newStream);
            aoe3Count++;
          } else if (game === "AOE4" && aoe4Count < 15) {
            usersUrl += "&id=" + stream.user_id;
            streamData.push(newStream);
            aoe4Count++;
          }
        });
        fetchUserData(usersUrl).then((usersData) => {
          streamData.forEach((stream) => {
            const streamUser = usersData.find(
              (user) => user.id === stream.user_id
            );
            if (streamUser) {
              stream.user_name = streamUser.user_name;
              stream.user_profile_pic = streamUser.user_profile_pic;
            }
          });
          setLiveStreams(streamData);
        });
      })
      .catch((err) => console.log(err));
  };

  const fetchUserData = async (url) => {
    return await getUsers({
      url: url,
      headers: {
        Authorization: `Bearer ${twitchAccessToken}`,
      },
    })
      .then((res) => {
        const usersRes = res.data.data;
        const usersData = [];
        usersRes.forEach((user) => {
          const newUser = {
            id: user.id,
            user_name: user.display_name,
            user_profile_pic: user.profile_image_url,
          };
          usersData.push(newUser);
        });
        return usersData;
      })
      .catch((err) => console.log(err));
  };

  const fetchRoyalTwitchUsers = async () => {
    getRoyalTwitchChannels()
      .then((res) => {
        // This will find the first list where 'active (live)'  is true.
        const activeIdx = res.findIndex((list) => list.active === true);
        const royalChannels = res[activeIdx].royalTwitchChannelsList;
        let usersUrl = "";
        royalChannels.forEach((channel) => {
          channel.user_name = channel.url.slice(22);
          const userName = channel.url.slice(22);
          usersUrl += "&login=" + userName;
        });
        fetchUserData(usersUrl).then((usersData) => {
          royalChannels.forEach((channel) => {
            const foundUser = usersData.find(
              (user) =>
                user.user_name.toLowerCase() === channel.user_name.toLowerCase()
            );
            if (foundUser) {
              channel.user_id = foundUser.id;
              channel.user_profile_pic = foundUser.user_profile_pic;
            }
          });
          setRoyalTwitchUsers(royalChannels);
        });
      })
      .catch((err) => console.log(err));
  };

  const listButton = (stream) => {
    return (
      <ListItemButton
        key={stream.user_id}
        className={classes.listButton}
        href={stream.url}
        target="_blank"
        component="a"
      >
        <ListItemAvatar style={{ marginRight: -20 }}>
          <Avatar
            alt="Twitch Profile Image"
            src={stream.user_profile_pic}
            style={{ height: 25, width: 25 }}
          />
        </ListItemAvatar>

        <ListItemText
          primary={
            stream.user_name.length <= 20
              ? stream.user_name
              : stream.user_name.slice(0, 20) + "..."
          }
          style={{ textAlign: "left" }}
        />
        <ListItemText
          primary={stream.viewer_count}
          style={{ textAlign: "right", paddingRight: 5 }}
        />
        {stream.viewer_count ? (
          <VisibilityIcon fontSize="small" />
        ) : (
          <VisibilityOffIcon fontSize="small" />
        )}
      </ListItemButton>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>Top Streams</div>
      <Tooltip
        title="Age of Empires III"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={600}
        enterNextDelay={600}
      >
        <Button
          className={classes.button}
          style={
            activeTab === "AOE3"
              ? { borderBottom: "2px #71ccdf solid" }
              : { borderBottom: "none" }
          }
          onClick={() => setActiveTab("AOE3")}
        >
          <img src={age3Icon} alt={"age3 icon"} className={classes.logoImg} />
        </Button>
      </Tooltip>

      <Tooltip
        title="Age of Empires IV"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={600}
        enterNextDelay={600}
      >
        <Button
          className={classes.button}
          style={
            activeTab === "AOE4"
              ? { borderBottom: "2px #71ccdf solid" }
              : { borderBottom: "none" }
          }
          onClick={() => setActiveTab("AOE4")}
        >
          <img src={age4Icon} alt={"age4 icon"} className={classes.logoImg} />
        </Button>
      </Tooltip>

      <Tooltip
        title="Royal Clan Channels"
        placement="top"
        TransitionComponent={Zoom}
        enterDelay={600}
        enterNextDelay={600}
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

      <List>
        {activeTab !== "royal" ? (
          liveStreams.map((stream) => {
            if (stream.game === activeTab) {
              return listButton(stream);
            }
            return null;
          })
        ) : (
          <React.Fragment>
            <FormGroup className={classes.customSwitchGroup}>
              <FormControlLabel
                label="Show Offline Channels"
                labelPlacement="start"
                control={
                  <Switch
                    checked={showOfflineChannels}
                    onChange={handleChange}
                    size="small"
                    name="checkedA"
                  />
                }
              />
            </FormGroup>
            {royalLiveStreams.map((stream) => {
              return listButton(stream);
            })}
            <React.Fragment>
              {showOfflineChannels &&
                royalOfflineChannels.map((channel) => {
                  return listButton(channel);
                })}
            </React.Fragment>
          </React.Fragment>
        )}
      </List>
    </div>
  );
};

export default StreamsPanel;
