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
  customInputField: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#fff",
    fontWeight: "bold",
    width: "80%",
  },
  customDropDown: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#fff",
    fontWeight: "bold",
    width: "80%",
    textAlign: "left",
  },
  buttonContainer: {
    textAlign: "center",
    width: "96%",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#2e3c45",
    border: "2px solid #71ccdf",
    height: "70vh",
    width: "50vw",
    borderRadius: 5,
    textAlign: "center",
    color: "#71ccdf",
    padding: 20,
    position: "relative",
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
  const { currentUser } = useAuth();
  const [activeStreams, setActiveStreams] = useState([]);
  const [activeStreamIDs, setActiveStreamIDs] = useState([]);
  const [offlineStreams, setOfflineStreams] = useState([]);
  const [showOfflineChannels, setShowOfflineChannels] = useState(false);
  const [royalStreams, setRoyalStreams] = useState([]);
  const [royalStreamsString, setRoyalStreamsString] = useState();

  const [dbUpdatePending, setDbUpdatePending] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalTab, setModalTab] = React.useState(0);

  const [showAddFormError, setAddShowFormError] = useState(false);
  const [showDeleteFormError, setShowDeleteFormError] = useState(false);
  const [deleteStream, setDeleteStream] = React.useState("");
  const [deleteStreamObject, setDeleteStreamObject] = React.useState({});
  const [streams, setStreams] = useState([
    {
      _id: "",
      name: "",
      url: "",
    },
  ]);
  const [createNewStream, setCreateNewStream] = useState({
    name: "",
    url: "",
  });

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
    const fetchLiveStreamData = async () => {
      let streamIDs = [];
      const result = await TwitchApi.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=15"
      );
      result.data.streams.map((stream) => streamIDs.push(stream.channel._id));
      setActiveStreams(result.data.streams);
      setActiveStreamIDs(streamIDs);
    };

    fetchLiveStreamData();

    if (royalStreams.length > 0) {
      let tempString = "";
      royalStreams.forEach((channel) => {
        tempString += `${channel.toLowerCase()},`;
      });
      tempString = tempString.slice(0, -1);
      setRoyalStreamsString(tempString);
    }

    if (royalStreamsString) {
      const fetchOfflineStreamDataFromTwitch = async () => {
        const result = await TwitchApi.get(
          `https://api.twitch.tv/kraken/users?login=${royalStreamsString}`
        );
        setOfflineStreams(result.data.users);
      };
      fetchOfflineStreamDataFromTwitch();
    }
  }, [royalStreams, royalStreamsString]);

  const handleChange = (event) => {
    setShowOfflineChannels(!showOfflineChannels);
  };

  const ColorButtonGreen = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#57b570",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#57b570",
      },
    },
  }))(Button);

  const ColorButtonRed = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#bf5858",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#bf5858",
      },
    },
  }))(Button);

  const handleTabChange = (event, newValue) => {
    clearFormData();
    setModalTab(newValue);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    clearFormData();
    setOpenModal(false);
  };

  function handleModalCancel(event) {
    handleModalClose();
  }

  const clearFormData = () => {
    setCreateNewStream({
      name: "",
      url: "",
    });
    setAddShowFormError(false);
    setShowDeleteFormError(false);
  };

  // const loadStreams = async () => {
  //   try {
  //     const res = await fetch("/.netlify/functions/getRoyalStreams");
  //     const streams = await res.json();
  //     setStreams(streams);
  //     setDbUpdatePending(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   loadStreams();
  // }, [dbUpdatePending]);

  function handleAddFormTextFieldChange(event) {
    const { value } = event.target;
    setCreateNewStream((prevInput) => {
      return {
        ...prevInput,
        url: value,
        name: value.slice(22),
      };
    });
  }

  function handleAddSubmit(event) {
    const addStreamObj = {
      name: createNewStream.name,
      url: createNewStream.url,
    };

    const addStream = async () => {
      if (createNewStream.name !== "" && createNewStream.url !== "") {
        try {
          await fetch("/.netlify/functions/createRoyalStream", {
            method: "POST",
            body: JSON.stringify(addStreamObj),
          });
        } catch (err) {
          console.log(err);
        }
        setOpenModal(false);
        setAddShowFormError(false);
        setDbUpdatePending(true);
      } else {
        setAddShowFormError(true);
      }

      console.log(addStreamObj);
    };

    addStream();
  }

  const handleDeleteFormSelection = (event) => {
    setDeleteStream(event.target.value);
    let deleteObj = streams.filter(
      (stream) => stream._id === event.target.value
    );
    setDeleteStreamObject(deleteObj[0]);
  };

  function handleDeleteSubmit(event) {
    const deleteStreamObj = {
      _id: deleteStreamObject._id,
    };

    const deleteStream = async () => {
      if (deleteStreamObject._id !== "") {
        try {
          await fetch("/.netlify/functions/deleteRoyalStream", {
            method: "DELETE",
            body: JSON.stringify(deleteStreamObj),
          });
        } catch (err) {
          console.log(err);
        }
        setOpenModal(false);
        setShowDeleteFormError(false);
        setDbUpdatePending(true);
      } else {
        setShowDeleteFormError(true);
      }
    };

    deleteStream();
  }

  // function ListItemLink(props) {
  //   const classes = useStyles();
  //   return (
  //     <ListItem
  //       button
  //       component="a"
  //       {...props}
  //       target="_blank"
  //       className={classes.customLink}
  //     />
  //   );
  // }

  function renderForm(param) {
    switch (param) {
      case 0:
        return (
          <>
            <div style={{ marginTop: 10 }}>
              Which stream channel would you like to add Royal Streams?
            </div>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.customInputField}
                id="outlined-basic2"
                label="Stream URL"
                variant="filled"
                name="url"
                value={createNewStream.url}
                onChange={handleAddFormTextFieldChange}
              />
              {showAddFormError ? (
                <div>Please make sure you entered a value Stream URL.</div>
              ) : null}
              <div className={classes.buttonContainer}>
                <Row className={"no-gutters"}>
                  <Col xl={6} xs={12}>
                    <ColorButtonRed
                      variant="contained"
                      color="primary"
                      onClick={handleModalCancel}
                      style={{ width: "90%" }}
                    >
                      Cancel
                    </ColorButtonRed>
                  </Col>
                  <Col xl={6} xs={12}>
                    <ColorButtonGreen
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleAddSubmit}
                      style={{ width: "90%" }}
                    >
                      Submit
                    </ColorButtonGreen>
                  </Col>
                </Row>
              </div>
            </form>
          </>
        );
      case 1:
        return (
          <>
            <div style={{ marginTop: 10 }}>
              Which stream channel would you like to delete from Royal Streams?
            </div>
            <FormControl variant="filled" className={classes.customDropDown}>
              <InputLabel id="demo-simple-select-outlined-label">
                Stream
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-filled"
                value={deleteStream}
                onChange={handleDeleteFormSelection}
              >
                {streams.map((stream) => (
                  <MenuItem key={stream._id} value={stream._id}>
                    {stream.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {showDeleteFormError ? (
              <div>Please select a stream to delete.</div>
            ) : null}
            <div className={classes.buttonContainer}>
              <Row className={"no-gutters"}>
                <Col xl={6} xs={12}>
                  <ColorButtonRed
                    variant="contained"
                    color="primary"
                    onClick={handleModalCancel}
                    style={{ width: "90%" }}
                  >
                    Cancel
                  </ColorButtonRed>
                </Col>
                <Col xl={6} xs={12}>
                  <ColorButtonGreen
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteSubmit}
                    style={{ width: "90%" }}
                  >
                    Submit
                  </ColorButtonGreen>
                </Col>
              </Row>
            </div>
          </>
        );
      default:
        return "foo";
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerText}>Royal Streams</div>
      </div>
      {currentUser ? (
        <div>
          <ColorButtonGreen
            style={{ marginTop: 10 }}
            endIcon={<EditIcon />}
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={handleModalOpen}
          >
            Edit
          </ColorButtonGreen>
        </div>
      ) : null}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit Royal Streams</h2>
            <Paper>
              <Tabs
                value={modalTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                style={{ backgroundColor: "#71ccdf" }}
              >
                <Tab
                  label="Add Stream"
                  style={{
                    backgroundColor: modalTab === 0 ? "#071a33" : "#71ccdf",
                    color: modalTab === 0 ? "#71ccdf" : "#071a33",
                  }}
                />
                <Tab
                  label="Delete Stream"
                  style={{
                    backgroundColor: modalTab === 1 ? "#071a33" : "#71ccdf",
                    color: modalTab === 1 ? "#71ccdf" : "#071a33",
                  }}
                />
              </Tabs>
            </Paper>
            {renderForm(modalTab)}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default RoyalStreams;
