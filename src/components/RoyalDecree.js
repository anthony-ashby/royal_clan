import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoyalTournamentBanner from "../images/Royal_3vs3_banner_finals.png";
import ForumIcon from "@material-ui/icons/Forum";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    margin: 25,
    backgroundColor: "#45748c",
    color: "#071a33",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  cardMoreInfo: {
    textAlign: "left",
  },
}));

function RoyalDecree() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          title: classes.title,
          subheader: classes.subheader,
        }}
        avatar={
          <Tooltip title={"antz_is_here"} aria-label="username" placement="top">
            <Avatar aria-label="recipe" className={classes.avatar}>
              A
            </Avatar>
          </Tooltip>
        }
        action={
          <Tooltip title="Manage Post" aria-label="manage post" placement="top">
            <IconButton>
              <MoreVertIcon className={classes.customIcons} />
            </IconButton>
          </Tooltip>
        }
        title="Royal 3vs3 Team Tournament!"
        subheader="September 14, 2016"
      />
      <CardMedia className={classes.media} image={RoyalTournamentBanner} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="#071a33" component="p">
          Royal Clan and Elite Gaming Channel joint together to bring you the
          epic 3vs3 tournament Finals and Semi-Finals Matches Featuring Guusjes
          vs Yayomfg, Cheesemonger vs Stanleo, Tad vs Kaister, and WickedCossack
          vs antz_is_here.
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

        <Tooltip aria-label="show more" title="Show More" placement="bottom">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            title="Show More"
          >
            <ExpandMoreIcon className={classes.customIcons} />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardMoreInfo}>
          <Typography paragraph>
            Welcome to the 3v3 tournament hosted by the RøyaL Clan!
          </Typography>
          <Typography paragraph>
            This is our first team tournament and the second tournament overall.
            This tournament is open to any player of any rank! The tournament
            will run throughout February and possibly into March and players
            will need to commit to ONE SERIES A WEEK. There is a small buy in of
            $5 USD and a PRIZE POOL OF $570 USD*!
          </Typography>
          <Typography paragraph>
            The tournament admins have the @committee role on the discord. You
            must be part of the tournament discord. We ask that you change your
            server nickname to match your in game name (admin may do this for
            you). Please try to maintain the same username for tournament games
            throughout the entire event.
          </Typography>
          <Typography paragraph>
            Other text about the announcement including rules, dates, prize
            pool, important pocs, etc.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RoyalDecree;
