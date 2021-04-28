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
import RoyalChallengeEvent from "../images/Royal_Challenge_Event.png";
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
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

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
        <CardMedia className={classes.media} image={RoyalHelterSkelter} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" component="p">
            Royal Clan and Elite Gaming Channel join together to bring you the
            Helter Skelter, a first-of-its-kind 2v2 tournament with random maps,
            civilizations, and teams! Click the arrow below for more
            information.
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
                [classes.expandOpen]: expanded1,
              })}
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon className={classes.customIcons} />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
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
                      players that are participating in the tournament. Event
                      will be streamed to show the random wheel spinning to
                      determine teams, civilizations, and maps (for the ENTIRE
                      tournament). Teams will be selected at random.
                      Civilizations will be selected randomly from each player’s
                      civ pool. Maps will be selected randomly. All teams,
                      matchups, civs, and maps will be known on this date.
                      Commence practice and scheduling for first round.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      7-9 May: First round is played.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      14-16 May: Second round is played. First round is
                      streamed.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      21-23 May: Third (final) round is played. Second round is
                      streamed.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      28-30 May: Third (final) round is streamed. Tournament
                      ends.
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
                      The total prize is $400, with the 1st place team
                      collecting it entirely.
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
                      restrictions or specific civ bans) to be added to their
                      civ pool. If that player plays all the way through the
                      finals and wins the tournament, they will have played all
                      7 civs from their civ pool. On 2 May, the random wheel
                      will pick the order in which the player plays their civs
                      (i.e. USA – R1G1, Brits – R2G1, Dutch – R2G2, …).
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
                      tournament and no player actively playing in the
                      tournament will have ANY say in committee actions.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Collapse>
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
        <CardMedia className={classes.media} image={RoyalChallengeEvent} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" component="p">
            This is the Royal Clan Challenge Event! THREE CHALLENGES are laid
            down by the Clan and in partnership with Elite Gaming Channel! The
            contestant with the BEST time that meets all the rules WILL WIN $50
            for that challenge!
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
                [classes.expandOpen]: expanded2,
              })}
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon className={classes.customIcons} />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent className={classes.cardMoreInfo}>
            <Accordion className={classes.customAccordian}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.customIcons2} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.customAccordianTitle}
              >
                <Typography className={classes.heading}>
                  General Rules
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li style={{ paddingTop: 10 }}>
                      Best Time that meets all conditions - win the Prize of $50
                      PER challenge. This event will run from April 27th to May
                      16th!
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Closing Date for these three challenges are: May 16th
                      12:00 AM (Midnight) EST.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      All games must be played on AOE3 DE.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      A game recording is the final deliverable and will be
                      judged. The recording must meet all criteria and be in the
                      spirit of the challenge.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      No economic and military units of yours can be deleted
                      (except for herdables which is fine), treasures are
                      allowed, and raiding the AI is allowed.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      No handicap and/or cheats allowed - please follow the
                      Lobby Setup Rules!
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
                  Win Condition
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li style={{ paddingTop: 10 }}>
                      Message a Screenshot with the final time AND message the
                      game file to one of the following admins: JaiLeD#9326 |
                      GKShaman #1286 | cheeesemonger #6704 throughout the time
                      period of April 27th to May 16th.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      A “FLOOR” time for each challenge will be released on the
                      1st and 8th. This takes the best time and rounds up to the
                      nearest minute and lets all members know what time to
                      strive for.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Example: If you send in a time of 8:30 for a challenge -
                      we will say the challenge 1 floor time is now beat 9 min!
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
                  Challenge Descriptions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <h3>15 Howdahs!</h3>
                  <ul>
                    <li style={{ paddingTop: 10 }}>
                      MAKE and/or SHIP a total of 15 Howdahs and SHIP “Elephant
                      Combat and then pause or resign.
                    </li>
                    <li style={{ paddingTop: 10 }}>Map: Punjab</li>
                  </ul>
                  <h3 style={{ marginTop: 20 }}>Rebellion Challenge!</h3>
                  <ul>
                    <li style={{ paddingTop: 10 }}>
                      Must have Max LAND villagers population (99 vills for all
                      Civs | 60 for Dutch | 80 for France).
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Must rebel into another country that converts civilians
                      into military unit.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Sepoy Rebellion and Tupac Rebellion allowed for India and
                      Inca.{" "}
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Not Allowed Civs: Lakota, Aztec, Haudi, China and Japan is
                      not allowed.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Dutch must make 7 banks and have 60 villagers.
                    </li>
                    <li style={{ paddingTop: 10 }}>Map: Florida</li>
                  </ul>
                  <h3 style={{ marginTop: 20 }}>70 Pop Convert Challenge!</h3>
                  <ul>
                    <li style={{ paddingTop: 10 }}>
                      MAKE and/or SHIP a total of 15 Howdahs and SHIP “Elephant
                      Combat and then pause or resign.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      All civs and their convert cards for all civs:
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Spain - Tercio Tactics - Pikes to Rods
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      China - New Army - Old Han to Territorial.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Russia - Suvorov’s Reforms - Strelet to Musk
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Lakota - Evening Star - Axe Riders into Rifles
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      French - Tiralluers - Crossbowman to Skirmishers.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      India - Sepoy Rebellion - Villagers to Sepoys.
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Inca - Tupac’s Rebellion - Units to European Units
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      Sweden - March of the Hakkapeliits - Hussar to Hakkapelits
                    </li>
                    <li style={{ paddingTop: 10 }}>
                      America - US Marines - Minutemen into Marines
                    </li>
                    <li style={{ paddingTop: 10 }}>Map: Saguenay</li>
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
                <Typography className={classes.heading}>Lobby Setup</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li style={{ paddingTop: 10 }}>Game Type: Supremacy</li>
                    <li style={{ paddingTop: 10 }}>Game Rules: Classic</li>
                    <li style={{ paddingTop: 10 }}>Difficulty: Easy</li>
                    <li style={{ paddingTop: 10 }}>
                      Starting Age: Exploration Age
                    </li>
                    <li style={{ paddingTop: 10 }}>Ending Age: Imperial Age</li>
                    <li style={{ paddingTop: 10 }}>
                      Starting Resources: Standard
                    </li>
                    <li style={{ paddingTop: 10 }}>Game Speed: Medium</li>
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
                      tournament and no player actively playing in the
                      tournament will have ANY say in committee actions.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Announcement;
