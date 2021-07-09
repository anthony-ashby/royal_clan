import React from "react";
import { makeStyles } from "@material-ui/styles";
// import EditIcon from "@material-ui/icons/Edit";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import BannerBackground from "../images/main_background.jpg";
import Announcement from "./Announcement";
// import { useAuth } from "../contexts/AuthContext";

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
  dividerStyle: {
    backgroundColor: "#a44e62",
    marginLeft: 10,
    marginRight: 10,
  },
});

function AnnouncementsContainer() {
  const classes = useStyles();
  // const [openModal, setOpenModal] = React.useState(false);
  // const { currentUser } = useAuth();

  // const handleModalOpen = () => {
  //   setOpenModal(true);
  // };

  // const handleModalClose = () => {
  //   setOpenModal(false);
  // };

  // const ColorButtonGreen = withStyles((theme) => ({
  //   root: {
  //     color: "#071a33",
  //     backgroundColor: "#57b570",
  //     fontWeight: "bold",
  //     "&:hover": {
  //       backgroundColor: "#57b570",
  //     },
  //   },
  // }))(Button);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerTxt}>Announcements</div>
      </div>
      {/* {currentUser ? (
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
      ) : null} */}
      <Announcement />
    </div>
  );
}

export default AnnouncementsContainer;
