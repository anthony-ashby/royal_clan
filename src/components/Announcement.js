import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    margin: 25,
    backgroundColor: "#45748c",
    color: "#071a33",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#071a33",
    cursor: "pointer",
  },
  cardHeader: {
    size: 20,
    color: "#071a33",
  },
  titleLoggedIn: {
    color: "#071a33",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "40px",
  },
  title: {
    color: "#071a33",
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: "60px",
  },
  subheaderLoggedIn: {
    color: "#071a33",
    paddingLeft: "40px",
  },
  subheader: {
    color: "#071a33",
    paddingRight: "60px",
  },
  customIcons: {
    color: "#071a33",
  },
  customIcons2: {
    color: "#71ccdf",
  },
  cardMoreInfo: {
    textAlign: "left",
  },
  customAccordianTitle: {
    backgroundColor: "#071a33",
    color: "#71ccdf",
  },
  customAccordian: {
    backgroundColor: "#2e3c45",
    color: "#71ccdf",
  },
  customEditButton: {
    marginTop: "10px",
    color: "#071a33",
    backgroundColor: "#57b570",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(87,181,112,0.7)",
    },
  },
  customDeleteButton: {
    marginTop: "10px",
    marginLeft: "5px",
    color: "#071a33",
    backgroundColor: "#bf5858",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(191,88,88,0.7)",
    },
  },
  cardContent: {
    "& a:link, a:visited, a:active": {
      backgroundColor: "#45748c",
      color: "#071a33",
    },
    "& a:hover": {
      backgroundColor: "#45748c",
    },
  },
}));

const Announcement = ({
  announcement,
  modifySpecificAnnouncement,
  deleteSpecificAnnouncement,
}) => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  return (
    <div>
      {announcement.type === "tournament" && !currentUser && (
        <Link
          to={`/${announcement.title.split(" ").join("")}`}
          style={{ textDecoration: "none" }}
        >
          <Card className={classes.root}>
            <CardHeader
              classes={{
                root: classes.cardHeader,
                title: currentUser ? classes.titleLoggedIn : classes.title,
                subheader: currentUser
                  ? classes.subheaderLoggedIn
                  : classes.subheader,
              }}
              avatar={
                <Tooltip
                  title={"Royal Admin"}
                  aria-label="username"
                  placement="top"
                >
                  <Avatar className={classes.avatar}>R</Avatar>
                </Tooltip>
              }
              action={
                currentUser && (
                  <>
                    <Tooltip
                      title="Modify"
                      aria-label="modify announcement"
                      placement="top"
                    >
                      <IconButton
                        aria-label="modify"
                        className={classes.customEditButton}
                        onClick={() => modifySpecificAnnouncement(announcement)}
                      >
                        <EditIcon className={classes.customIcons} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Delete"
                      aria-label="delete announcement"
                      placement="top"
                    >
                      <IconButton
                        aria-label="delete"
                        className={classes.customDeleteButton}
                        onClick={() => deleteSpecificAnnouncement(announcement)}
                      >
                        <DeleteIcon className={classes.customIcons} />
                      </IconButton>
                    </Tooltip>
                  </>
                )
              }
              title={announcement.title}
              subheader={announcement.dateModified.slice(0, 10)}
            />

            {announcement.imageURL && (
              <CardMedia
                className={classes.media}
                image={announcement.imageURL}
              />
            )}

            <CardContent className={classes.cardContent}>
              <div
                variant="body2"
                component="p"
                style={{ textAlign: "center" }}
              >
                {parse(announcement.body)}
              </div>
            </CardContent>
          </Card>
        </Link>
      )}

      {announcement.type === "tournament" && currentUser && (
        <Card className={classes.root}>
          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: currentUser ? classes.titleLoggedIn : classes.title,
              subheader: currentUser
                ? classes.subheaderLoggedIn
                : classes.subheader,
            }}
            avatar={
              <Tooltip
                title={"Royal Admin"}
                aria-label="username"
                placement="top"
              >
                <Avatar className={classes.avatar}>R</Avatar>
              </Tooltip>
            }
            action={
              currentUser && (
                <>
                  <Tooltip
                    title="Modify"
                    aria-label="modify announcement"
                    placement="top"
                  >
                    <IconButton
                      aria-label="modify"
                      className={classes.customEditButton}
                      onClick={() => modifySpecificAnnouncement(announcement)}
                    >
                      <EditIcon className={classes.customIcons} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Delete"
                    aria-label="delete announcement"
                    placement="top"
                  >
                    <IconButton
                      aria-label="delete"
                      className={classes.customDeleteButton}
                      onClick={() => deleteSpecificAnnouncement(announcement)}
                    >
                      <DeleteIcon className={classes.customIcons} />
                    </IconButton>
                  </Tooltip>
                </>
              )
            }
            title={announcement.title}
            subheader={announcement.dateModified.slice(0, 10)}
          />

          {announcement.imageURL && (
            <Link
              to={`/${announcement.title.split(" ").join("")}`}
              style={{ textDecoration: "none" }}
            >
              <CardMedia
                className={classes.media}
                image={announcement.imageURL}
              />
            </Link>
          )}

          <CardContent className={classes.cardContent}>
            <div variant="body2" component="p" style={{ textAlign: "center" }}>
              {parse(announcement.body)}
            </div>
          </CardContent>
        </Card>
      )}

      {announcement.type === "general" && (
        <Card className={classes.root}>
          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: currentUser ? classes.titleLoggedIn : classes.title,
              subheader: currentUser
                ? classes.subheaderLoggedIn
                : classes.subheader,
            }}
            avatar={
              <Tooltip
                title={"Royal Admin"}
                aria-label="username"
                placement="top"
              >
                <Avatar className={classes.avatar}>R</Avatar>
              </Tooltip>
            }
            action={
              currentUser && (
                <>
                  <Tooltip
                    title="Modify"
                    aria-label="modify announcement"
                    placement="top"
                  >
                    <IconButton
                      aria-label="modify"
                      className={classes.customEditButton}
                      onClick={() => modifySpecificAnnouncement(announcement)}
                    >
                      <EditIcon className={classes.customIcons} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Delete"
                    aria-label="delete announcement"
                    placement="top"
                  >
                    <IconButton
                      aria-label="delete"
                      className={classes.customDeleteButton}
                      onClick={() => deleteSpecificAnnouncement(announcement)}
                    >
                      <DeleteIcon className={classes.customIcons} />
                    </IconButton>
                  </Tooltip>
                </>
              )
            }
            title={announcement.title}
            subheader={announcement.dateModified.slice(0, 10)}
          />

          {announcement.imageURL && (
            <CardMedia
              className={classes.media}
              image={announcement.imageURL}
            />
          )}

          <CardContent className={classes.cardContent}>
            <div variant="body2" component="p" style={{ textAlign: "center" }}>
              {parse(announcement.body)}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Announcement;
