import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoyalHelterSkelter from "../images/helter_skelter_announcement.jpg";
import RoyalChallengeEvent from "../images/Royal_Challenge_Event.png";
import ForumIcon from "@material-ui/icons/Forum";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

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
  title: {
    color: "#071a33",
    fontSize: 20,
    fontWeight: "bold",
  },
  subheader: {
    color: "#071a33",
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
}));

function Announcement() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.title,
            subheader: classes.subheader,
          }}
          avatar={
            <Tooltip
              title={"antz_is_here"}
              aria-label="username"
              placement="top"
            >
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            </Tooltip>
          }
          action={
            <Tooltip
              title="Manage Post"
              aria-label="manage post"
              placement="top"
            >
              <IconButton>
                <MoreVertIcon className={classes.customIcons} />
              </IconButton>
            </Tooltip>
          }
          title="Royal 2v2 Helter Skelter Team Tournament!"
          subheader="Dates To Be Announced"
        />
        <Link to="/helterskelter" style={{ textDecoration: "none" }}>
          <CardMedia className={classes.media} image={RoyalHelterSkelter} />
        </Link>

        <CardContent className={classes.cardContent}>
          <Typography variant="body2" component="p">
            Royal Clan and Elite Gaming Channel join together to bring you the
            Helter Skelter, a first-of-its-kind 2v2 tournament with random maps,
            civilizations, and teams! Click the image above for more information
            and rules.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip
            title="View in Forums"
            aria-label="view in forums"
            placement="bottom"
          >
            <IconButton>
              <ForumIcon className={classes.customIcons} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.title,
            subheader: classes.subheader,
          }}
          avatar={
            <Tooltip
              title={"antz_is_here"}
              aria-label="username"
              placement="top"
            >
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            </Tooltip>
          }
          action={
            <Tooltip
              title="Manage Post"
              aria-label="manage post"
              placement="top"
            >
              <IconButton>
                <MoreVertIcon className={classes.customIcons} />
              </IconButton>
            </Tooltip>
          }
          title="Royal Challenge Event!"
          subheader="April 27th - May 16th (Ongoing)"
        />
        <Link to="/royalchallengeevent" style={{ textDecoration: "none" }}>
          <CardMedia className={classes.media} image={RoyalChallengeEvent} />
        </Link>

        <CardContent className={classes.cardContent}>
          <Typography variant="body2" component="p">
            This is the Royal Clan Challenge Event! THREE CHALLENGES are laid
            down by the Clan and in partnership with Elite Gaming Channel! The
            contestant with the BEST time that meets all the rules WILL WIN $50
            for that challenge! Click the image above for more information and
            rules.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip
            title="View in Forums"
            aria-label="view in forums"
            placement="bottom"
          >
            <IconButton>
              <ForumIcon className={classes.customIcons} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
}

export default Announcement;
