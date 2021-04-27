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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoyalHelterSkelter from "../images/helter_skelter_announcement.jpg";
import ForumIcon from "@material-ui/icons/Forum";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        title="Royal 2v2 Helter Skelter Team Tournament!"
        subheader="Dates To Be Announced"
      />
      <CardMedia className={classes.media} image={RoyalHelterSkelter} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" component="p">
          Royal Clan and Elite Gaming Channel join together to bring you the
          Helter Skelter, a first-of-its-kind 2v2 tournament with random maps,
          civilizations, and teams! Click the arrow below for more information.
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
          >
            <ExpandMoreIcon className={classes.customIcons} />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardMoreInfo}>
          <Accordion className={classes.customAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.customAccordianTitle}
            >
              <Typography className={classes.heading}>
                Important Dates (Tentative)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  {/* <li style={{ paddingTop: 10 }}>
                    24 Apr – 1 May: Signups are open to all players. Players
                    must give their primary username (no AKAs) and must play
                    with that username through the entire tournament. Each
                    player will nominate 6 civilizations to be added to their
                    “civ pool” that will later be randomized.
                  </li> */}
                  <li style={{ paddingTop: 10 }}>
                    2 May: Tournament administrators will reveal the top 16
                    players that are participating in the tournament. Event will
                    be streamed to show the random wheel spinning to determine
                    teams, civilizations, and maps (for the ENTIRE tournament).
                    Teams will be selected at random. Civilizations will be
                    selected randomly from each player’s civ pool. Maps will be
                    selected randomly. All teams, matchups, civs, and maps will
                    be known on this date. Commence practice and scheduling for
                    first round.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    7-9 May: First round is played.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    14-16 May: Second round is played. First round is streamed.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    21-23 May: Third (final) round is played. Second round is
                    streamed.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    28-30 May: Third (final) round is streamed. Tournament ends.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.customAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.customAccordianTitle}
            >
              <Typography className={classes.heading}>
                Tournament Format
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li style={{ paddingTop: 10 }}>
                    The tournament will consist of 16 players playing 2v2
                    matches (8 teams).
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    There will be three rounds (Quarterfinals, Semifinals,
                    Finals).
                  </li>
                  <li style={{ paddingTop: 10 }}>Quarterfinals are BO3.</li>
                  <li style={{ paddingTop: 10 }}>Semifinals are BO3.</li>
                  <li style={{ paddingTop: 10 }}>Finals are BO5.</li>
                  <li style={{ paddingTop: 10 }}>
                    Total amount of games played by each team (if they win) is
                    7.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    The total prize is $400, with the 1st place team collecting
                    it entirely.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.customAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              className={classes.customAccordianTitle}
            >
              <Typography className={classes.heading}>
                Civilization Rules
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li style={{ paddingTop: 10 }}>
                    Each player on signup will nominate 7 civilizations (no
                    restrictions or specific civ bans) to be added to their civ
                    pool. If that player plays all the way through the finals
                    and wins the tournament, they will have played all 7 civs
                    from their civ pool. On 2 May, the random wheel will pick
                    the order in which the player plays their civs (i.e. USA –
                    R1G1, Brits – R2G1, Dutch – R2G2, …).
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    There will be no civ bans or other restrictions.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.customAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
              aria-controls="panel4a-content"
              id="panel4a-header"
              className={classes.customAccordianTitle}
            >
              <Typography className={classes.heading}>Map Rules</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li style={{ paddingTop: 10 }}>
                    The map for each game for the entire tournament will be
                    randomized on 2 May.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    There will be no map bans or other restrictions.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.customAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
              aria-controls="panel5a-content"
              id="panel5a-header"
              className={classes.customAccordianTitle}
            >
              <Typography className={classes.heading}>
                Scheduling and Other Rules
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li style={{ paddingTop: 10 }}>
                    Once a date/time is agreed upon by all players for a
                    particular match, everyone must make their best effort to
                    show up on time. There will be a penalty for inexcusable
                    delays as follows:
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    Quarterfinals – If a match is delayed by 30 min., the team
                    causing the delay will forfeit.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    Semifinals – If a match is delayed by 1 hr., the team
                    causing the delay will forfeit.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    Finals – If a match is delayed by 1 hr., the team causing
                    the delay will forfeit.
                  </li>
                  <li style={{ paddingTop: 10 }}>
                    If any conflict arises during the tournament, tournament
                    admins will discuss potential remedies and hold a vote on
                    outcomes. NO tournament admins will take place in the
                    tournament and no player actively playing in the tournament
                    will have ANY say in committee actions.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Announcement;
