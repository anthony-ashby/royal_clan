import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {},
  customDropDown: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "white",
    fontWeight: "bold",
    width: "80%",
    textAlign: "left",
  },
  buttonContainer: {
    textAlign: "center",
    width: "96%",
    marginTop: 20,
    paddingTop: 20,
    position: "relative",
    bottom: 20,
  },
  input: {
    display: "none",
    width: "100%",
  },
});

const DeleteAnnouncement = ({
  handleModalClose,
  setAnnouncementsPending,
  announcements,
  selectedAnnouncement,
}) => {
  const classes = useStyles();
  const [showDeleteFormError, setShowDeleteFormError] = useState(false);
  const [deleteAnnouncement, setDeleteAnnouncement] = React.useState("");
  const [deleteAnnouncementObject, setDeleteAnnouncementObject] =
    React.useState({});

  useEffect(() => {
    if (selectedAnnouncement) {
      setDeleteAnnouncementObject(selectedAnnouncement);
      setDeleteAnnouncement(selectedAnnouncement._id);
    }
  }, [selectedAnnouncement]);

  const ColorButtonGreen = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#57b570",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "rgb(87,181,112,0.7)",
      },
    },
  }))(Button);

  const ColorButtonRed = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#bf5858",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "rgb(191,88,88,0.7)",
      },
    },
  }))(Button);

  function handleDeleteSubmit(event) {
    const deleteAnnouncementObj = {
      _id: deleteAnnouncementObject._id,
    };

    const deleteAnnouncement = async () => {
      if (deleteAnnouncementObject._id) {
        try {
          await fetch("/.netlify/functions/deleteAnnouncement", {
            method: "DELETE",
            body: JSON.stringify(deleteAnnouncementObj),
          });
        } catch (err) {
          console.log(err);
        }
        handleModalClose();
        setShowDeleteFormError(false);
        setAnnouncementsPending(true);
      } else {
        setShowDeleteFormError(true);
      }
    };

    deleteAnnouncement();
  }

  const handleDeleteFormSelection = (event) => {
    setDeleteAnnouncement(event.target.value);
    let deleteObj = announcements.filter(
      (announcement) => announcement._id === event.target.value
    );
    setDeleteAnnouncementObject(deleteObj[0]);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        Please use the form below to delete an announcement.
      </div>
      <FormControl variant="filled" className={classes.customDropDown}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Announcement
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-filled"
          value={deleteAnnouncement}
          onChange={handleDeleteFormSelection}
        >
          {announcements.map((announcement) => (
            <MenuItem key={announcement._id} value={announcement._id}>
              {announcement.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {showDeleteFormError ? (
        <div>Please select an announcement to delete.</div>
      ) : null}

      <div className={classes.buttonContainer}>
        <Row className={"no-gutters"}>
          <Col xl={6} xs={12}>
            <ColorButtonRed
              variant="contained"
              color="primary"
              onClick={handleModalClose}
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
};

export default DeleteAnnouncement;
