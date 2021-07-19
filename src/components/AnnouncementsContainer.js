import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BannerBackground from "../images/main_background.jpg";
import Announcement from "./Announcement";
import { useAuth } from "../contexts/AuthContext";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddAnnouncement from "./crud/AddAnnouncement";
import ModifyAnnouncement from "./crud/ModifyAnnouncement";
import DeleteAnnouncement from "./crud/DeleteAnnouncement";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  paper: {
    backgroundColor: "#2e3c45",
    border: "2px solid #71ccdf",
    minHeight: "70vh",
    height: "90vh",
    width: "50vw",
    borderRadius: 5,
    textAlign: "center",
    color: "#71ccdf",
    padding: 20,
    position: "relative",
    overflowY: "auto",
  },
  alignment: {
    display: "block",
    //  color: 'red'
  },
});

const AnnouncementsContainer = ({ announcements, setAnnouncementsPending }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useAuth();
  const [modalTab, setModalTab] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState("");
  const [sortedAnnouncements, setSortedAnnouncements] = useState();

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

  const handleTabChange = (event, newValue) => {
    setModalTab(newValue);
    setSelectedAnnouncement();
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalTab(0);
    setSelectedAnnouncement();
  };

  const modifySpecificAnnouncement = (announcement) => {
    setModalTab(1);
    setOpenModal(true);
    setSelectedAnnouncement(announcement);
  };

  const deleteSpecificAnnouncement = (announcement) => {
    setModalTab(2);
    setOpenModal(true);
    setSelectedAnnouncement(announcement);
  };

  const renderForm = (param) => {
    switch (param) {
      case 0:
        return (
          <AddAnnouncement
            handleModalClose={handleModalClose}
            setAnnouncementsPending={setAnnouncementsPending}
          />
        );
      case 1:
        return (
          <ModifyAnnouncement
            handleModalClose={handleModalClose}
            setAnnouncementsPending={setAnnouncementsPending}
            announcements={announcements}
            selectedAnnouncement={selectedAnnouncement}
          />
        );
      case 2:
        return (
          <DeleteAnnouncement
            handleModalClose={handleModalClose}
            setAnnouncementsPending={setAnnouncementsPending}
            announcements={announcements}
            selectedAnnouncement={selectedAnnouncement}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (announcements) {
      let sorted = announcements.sort(function (x, y) {
        let a = new Date(x.dateModified);
        let b = new Date(y.dateModified);
        return b - a;
      });
      setSortedAnnouncements(sorted);
    }
  }, [announcements]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerTxt}>Announcements</div>
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

      {sortedAnnouncements?.map((announcement) => (
        <div key={announcement._id}>
          <Announcement
            announcement={announcement}
            modifySpecificAnnouncement={modifySpecificAnnouncement}
            deleteSpecificAnnouncement={deleteSpecificAnnouncement}
          />
        </div>
      ))}

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
            <h2 id="transition-modal-title">Edit Announcements</h2>
            <Paper className={classes.root}>
              <Tabs
                value={modalTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                style={{ backgroundColor: "#71ccdf" }}
              >
                <Tab
                  label="Add"
                  icon={
                    <AddIcon
                      style={{
                        display: "inline-block",
                        marginRight: "5px",
                        marginBottom: "0",
                      }}
                    />
                  }
                  style={{
                    backgroundColor: modalTab === 0 ? "#071a33" : "#71ccdf",
                    color: modalTab === 0 ? "#71ccdf" : "#071a33",
                    display: "inline-block",
                  }}
                  classes={{
                    wrapper: classes.alignment,
                  }}
                />
                <Tab
                  label="Modify"
                  icon={
                    <EditIcon
                      style={{
                        display: "inline-block",
                        marginRight: "5px",
                        marginBottom: "0",
                      }}
                    />
                  }
                  style={{
                    backgroundColor: modalTab === 1 ? "#071a33" : "#71ccdf",
                    color: modalTab === 1 ? "#71ccdf" : "#071a33",
                    display: "inline-block",
                  }}
                  classes={{
                    wrapper: classes.alignment,
                  }}
                />
                <Tab
                  label="Delete"
                  icon={
                    <DeleteIcon
                      style={{
                        display: "inline-block",
                        marginRight: "5px",
                        marginBottom: "0",
                      }}
                    />
                  }
                  style={{
                    backgroundColor: modalTab === 2 ? "#071a33" : "#71ccdf",
                    color: modalTab === 2 ? "#71ccdf" : "#071a33",
                    display: "inline-block",
                  }}
                  classes={{
                    wrapper: classes.alignment,
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
};

export default AnnouncementsContainer;
