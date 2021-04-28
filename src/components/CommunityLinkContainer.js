import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import BannerBackground from "../images/main_background.jpg";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
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
  root: {},
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
    color: "#71ccdf",
    fontSize: 20,
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
  customInputField: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#71ccdf",
    fontWeight: "bold",
    width: "80%",
  },
  customDropDown: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#71ccdf",
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
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
});

function CommunityLinkContainer() {
  const classes = useStyles();
  const [dbUpdatePending, setDbUpdatePending] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [communityLinks, setCommunityLinks] = useState([
    {
      _id: "",
      name: "",
      url: "",
    },
  ]);
  const [createNewLink, setCreateNewLink] = useState({
    name: "",
    url: "",
  });

  const { currentUser } = useAuth();

  const [showAddFormError, setAddShowFormError] = useState(false);
  const [showModifyFormError, setShowModifyFormError] = useState(false);
  const [showDeleteFormError, setShowDeleteFormError] = useState(false);

  const [modalTab, setModalTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setModalTab(newValue);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setCreateNewLink({
      name: "",
      url: "",
    });
    setOpenModal(false);
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

  // useEffect(() => {
  //   fetch("/community_links")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setCommunityLinks(jsonRes))
  //     .then(setDbUpdatePending(false));
  // }, [dbUpdatePending]);

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

  function handleAddSubmit(event) {
    const newCommunityLink = {
      name: createNewLink.name,
      url: createNewLink.url,
    };

    if (newCommunityLink.name !== "" && newCommunityLink.url !== "") {
      // axios
      //   .post("http://localhost:3001/create", newCommunityLink)
      //   .then(setDbUpdatePending(true))
      //   .then(
      //     setCreateNewLink({
      //       name: "",
      //       url: "",
      //     })
      //   );

      setOpenModal(false);
      setAddShowFormError(false);
    } else {
      setAddShowFormError(true);
    }
  }

  function handleModifySubmit(event) {
    const updateCommunityLink = {
      _id: modifyLinkObject._id,
      name: modifyLinkObject.name,
      url: modifyLinkObject.url,
    };

    if (modifyLinkObject.name !== "" && modifyLinkObject.url !== "") {
      // axios
      //   .post("/update", updateCommunityLink)
      //   .then(setDbUpdatePending(true))
      //   .then(
      //     setCreateNewLink({
      //       name: "",
      //       url: "",
      //     })
      //   );

      setOpenModal(false);
      setShowModifyFormError(false);
    } else {
      setShowModifyFormError(true);
    }
  }

  function handleDeleteSubmit(event) {
    const deleteCommunityLink = {
      _id: deleteLinkObject._id,
      name: deleteLinkObject.name,
      url: deleteLinkObject.url,
    };

    if (deleteLinkObject.name !== "" && deleteLinkObject.url !== "") {
      // axios
      //   .post("/delete", deleteCommunityLink)
      //   .then(setDbUpdatePending(true))
      //   .then(
      //     setCreateNewLink({
      //       name: "",
      //       url: "",
      //     })
      //   );

      setOpenModal(false);
      setShowDeleteFormError(false);
    } else {
      setShowDeleteFormError(true);
    }
  }

  function handleModalCancel(event) {
    // setCreateNewLink({});
    // setModifyLinkObject({});
    setModifyLink("");
    setOpenModal(false);
    setAddShowFormError(false);
    setShowModifyFormError(false);
  }

  function handleAddFormTextFieldChange(event) {
    const { name, value } = event.target;
    setCreateNewLink((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleModifyFormTextFieldChange(event) {
    const { name, value } = event.target;
    setModifyLinkObject((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const [modifyLink, setModifyLink] = React.useState("");
  const [modifyLinkObject, setModifyLinkObject] = React.useState({});
  const [deleteLink, setDeleteLink] = React.useState("");
  const [deleteLinkObject, setDeleteLinkObject] = React.useState({});

  const handleModifyFormSelection = (event) => {
    setModifyLink(event.target.value);
    let modifyObj = communityLinks.filter(
      (link) => link._id === event.target.value
    );
    setModifyLinkObject(modifyObj[0]);
  };

  const handleDeleteFormSelection = (event) => {
    setDeleteLink(event.target.value);
    let deleteObj = communityLinks.filter(
      (link) => link._id === event.target.value
    );
    setDeleteLinkObject(deleteObj[0]);
  };

  function renderForm(param) {
    switch (param) {
      case 0:
        return (
          <>
            <div style={{ marginTop: 10 }}>
              Which link would you like to add?
            </div>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.customInputField}
                id="outlined-basic"
                label="Link Name"
                variant="filled"
                name="name"
                value={createNewLink.name}
                onChange={handleAddFormTextFieldChange}
              />
              <TextField
                className={classes.customInputField}
                id="outlined-basic2"
                label="Link URL"
                variant="filled"
                name="url"
                value={createNewLink.url}
                onChange={handleAddFormTextFieldChange}
              />
            </form>
            {showAddFormError ? (
              <div>Please make sure you entered a value for Name and URL.</div>
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
          </>
        );
      case 1:
        return (
          <>
            <div style={{ marginTop: 10 }}>
              Which link would you like to modify?
            </div>
            <FormControl variant="filled" className={classes.customDropDown}>
              <InputLabel id="demo-simple-select-outlined-label">
                Link
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-filled"
                value={modifyLink}
                onChange={handleModifyFormSelection}
              >
                {communityLinks.map((link) => (
                  <MenuItem key={link._id} value={link._id}>
                    {link.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.customInputField}
                id="outlined-basic"
                label="Link Name"
                variant="filled"
                name="name"
                value={modifyLinkObject.name ? modifyLinkObject.name : ""}
                onChange={handleModifyFormTextFieldChange}
                focused={true}
              />
              <TextField
                className={classes.customInputField}
                id="outlined-basic2"
                label="Link URL"
                variant="filled"
                name="url"
                value={modifyLinkObject.url ? modifyLinkObject.url : ""}
                onChange={handleModifyFormTextFieldChange}
                focused={true}
              />
            </form>
            {showModifyFormError ? (
              <div>Please make sure you entered a value for Name and URL.</div>
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
                    variant="contained"
                    color="primary"
                    onClick={handleModifySubmit}
                    style={{ width: "90%" }}
                  >
                    Submit
                  </ColorButtonGreen>
                </Col>
              </Row>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div style={{ marginTop: 10 }}>
              Which link would you like to delete?
            </div>
            <FormControl variant="filled" className={classes.customDropDown}>
              <InputLabel id="demo-simple-select-outlined-label">
                Link
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-filled"
                value={deleteLink}
                onChange={handleDeleteFormSelection}
              >
                {communityLinks.map((link) => (
                  <MenuItem key={link._id} value={link._id}>
                    {link.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {showDeleteFormError ? (
              <div>Please make select a link to delete.</div>
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
      <div className={classes.header}>Community Links</div>
      <div></div>

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

      {/* <List component="nav" aria-label="main mailbox folders">
        {communityLinks.map((link) => (
          <div key={link._id}>
            <ListItemLink className={classes.listItem} href={link.url}>
              <ListItemText primary={link.name} style={{ textAlign: "left" }} />
            </ListItemLink>
          </div>
        ))}
      </List> */}
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
            <h2 id="transition-modal-title">Edit Community Links</h2>
            <Paper className={classes.root}>
              <Tabs
                value={modalTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Add Link" />
                <Tab label="Modify Link" />
                <Tab label="Delete Link" />
              </Tabs>
            </Paper>
            {renderForm(modalTab)}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CommunityLinkContainer;