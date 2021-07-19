import React from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoyalHelterSkelter from "../images/helter_skelter_announcement.jpg";
import ForumIcon from "@material-ui/icons/Forum";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import alaska from "../images/maps/alaska.png";
import baja from "../images/maps/baja-california.png";
import blackrock from "../images/maps/black-rock-desert.png";
import dhaka from "../images/maps/dhaka.png";
import fraser from "../images/maps/fraser-river.png";
import gran from "../images/maps/gran-chaco.png";
import kamch from "../images/maps/kamchatka.png";
import manch from "../images/maps/manchuria.png";
import marshlands from "../images/maps/marshlands.png";
import nepal from "../images/maps/nepal.png";
import punjab from "../images/maps/punjab.png";
import saguenay from "../images/maps/saguenay.png";

import match1 from "../images/helter_round1/Haitch-Perez_Jeri-Soldier.png";
import match2 from "../images/helter_round1/Kaister-Don_Opti-Aizamk.png";
import match3 from "../images/helter_round1/Prinz-King_AOK-Wicked.png";
import match4 from "../images/helter_round1/Danielek-Kynesie_Knusch-Aykin.png";

import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2e3c45",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    marginTop: "20px",
    textAlign: "center",
  },
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
  cardRoot: {
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
  buttonContainer: {
    textAlign: "left",
    marginTop: 25,
    marginLeft: 25,
  },
  mapPool: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
  },
});

function HelterSkelter() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#45748c",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#45748c",
      },
    },
  }))(Button);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>

        <Col xl={8} xs={12}>
          <Row className={"no-gutters"}>
            <Col xs={1}></Col>
            <Col xl={12} xs={10} className={classes.root}>
              <div>
                <div className={classes.header}>
                  <div className={classes.headerTxt}>Helter Skelter</div>
                </div>
                <div style={{ margin: 15, color: "#71ccdf" }}>
                  <div className={classes.buttonContainer}>
                    <Link to="/tournaments" style={{ textDecoration: "none" }}>
                      <ColorButton
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        startIcon={<ArrowBackIcon />}
                      >
                        Back to Tournaments
                      </ColorButton>
                    </Link>
                  </div>
                  <Card className={classes.cardRoot}>
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
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
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
                    <CardMedia
                      className={classes.media}
                      image={RoyalHelterSkelter}
                    />
                    <CardContent className={classes.cardContent}>
                      <div variant="body2" component="p">
                        Royal Clan and Elite Gaming Channel join together to
                        bring you the Helter Skelter, a first-of-its-kind 2v2
                        tournament with random maps, civilizations, and teams!
                        Click the arrow below for more information.
                      </div>
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

                      <Tooltip
                        aria-label="show more"
                        title="Show More"
                        placement="bottom"
                      >
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
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel7a-content"
                            id="panel7a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Digital Content - Broadcasts
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ReactPlayer
                              url="https://www.twitch.tv/videos/1005770334?t=00h05m37s"
                              controls
                            />
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel6a-content"
                            id="panel6a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Round 1 (Quarterfinals) Match Details
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <Row
                                className={"no-gutters"}
                                style={{ textAlign: "center" }}
                              >
                                <Col xl={12}>
                                  <img
                                    src={match1}
                                    alt={"match1"}
                                    style={{
                                      marginTop: 20,
                                      width: "90%",
                                      borderRadius: 20,
                                    }}
                                  />
                                  <img
                                    src={match2}
                                    alt={"match2"}
                                    style={{
                                      marginTop: 20,
                                      width: "90%",
                                      borderRadius: 20,
                                    }}
                                  />
                                  <img
                                    src={match3}
                                    alt={"match3"}
                                    style={{
                                      marginTop: 20,
                                      width: "90%",
                                      borderRadius: 20,
                                    }}
                                  />
                                  <img
                                    src={match4}
                                    alt={"match4"}
                                    style={{
                                      marginTop: 20,
                                      width: "90%",
                                      borderRadius: 20,
                                    }}
                                  />
                                </Col>
                              </Row>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Important Dates (Tentative)
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <ul>
                                <li style={{ paddingTop: 10 }}>
                                  29 April: Tournament administrators will
                                  reveal the top 16 players that are
                                  participating in the tournament. Event will be
                                  streamed to show the random wheel spinning to
                                  determine teams, civilizations, and maps (for
                                  the ENTIRE tournament). Teams will be selected
                                  at random. Civilizations will be selected
                                  randomly from each player’s civ pool. Maps
                                  will be selected randomly. All teams,
                                  matchups, civs, and maps will be known on this
                                  date. Commence practice and scheduling for
                                  first round.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  30 April - 10 May: All matches and streams
                                  will take place so as not to conflict with the
                                  upcoming ESOC AOE3 Global Championships. Every
                                  effort should be made to complete the
                                  tournament during this time period.
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Tournament Format
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <ul>
                                <li style={{ paddingTop: 10 }}>
                                  The tournament will consist of 16 players
                                  playing 2v2 matches (8 teams).
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  There will be three rounds (Quarterfinals,
                                  Semifinals, Finals).
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Quarterfinals are BO3.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Semifinals are BO3.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Finals are BO5.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  The total prize is $400, with the 1st place
                                  team collecting it entirely.
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Civilization Rules
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <ul>
                                <li style={{ paddingTop: 10 }}>
                                  Each player on signup will nominate 6
                                  civilizations (no restrictions or specific civ
                                  bans) to be added to their civ pool. On 29
                                  Apr, the random wheel will pick the order in
                                  which the player plays their civs (i.e. USA –
                                  R1G1, Brits – R2G1, Dutch – R2G2, …).
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  The players have voted through a majority and
                                  Sweden is BANNED.
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>Map Rules</div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <ul>
                                <li style={{ paddingTop: 10 }}>
                                  The map for each game for the entire
                                  tournament will be randomized on 29 Apr.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  There will be no map bans or other
                                  restrictions.
                                </li>

                                <li style={{ paddingTop: 10 }}>
                                  Players must install/enable the following mod
                                  to be used for maps:{" "}
                                  <a
                                    href="https://www.ageofempires.com/mods/details/22419/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    RoyaL 2v2 Helter Skelter Tournament Maps.
                                  </a>
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  For more information on the map pool, please
                                  visit:{" "}
                                  <a
                                    href="https://docs.google.com/document/d/1uF1dSInpcQvxXXB6spg-iSKxS162otdW1i-_BoUlcNk/edit"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    RoyaL 2v2 Helter Skelter Map Pool.
                                  </a>
                                </li>
                              </ul>
                              <div className={classes.mapPool}>
                                Map Pool:
                                <Row className={"no-gutters"}>
                                  <Col xl={4} xs={12}>
                                    <div>
                                      <img
                                        src={alaska}
                                        className={"img-rounded"}
                                        alt={"map"}
                                        style={{ marginTop: 20 }}
                                      />
                                    </div>
                                    <div>Alaska</div>
                                    <img
                                      src={baja}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Baja California</div>
                                    <img
                                      src={blackrock}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Black Rock Desert</div>
                                    <img
                                      src={dhaka}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Dhaka</div>
                                  </Col>
                                  <Col xl={4} xs={12}>
                                    <img
                                      src={fraser}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Fraser River</div>
                                    <img
                                      src={gran}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Gran Chaco</div>
                                    <img
                                      src={kamch}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Kamchatka</div>
                                    <img
                                      src={manch}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Manchuria</div>
                                  </Col>
                                  <Col xl={4} xs={12}>
                                    <img
                                      src={marshlands}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Marshlands</div>
                                    <img
                                      src={nepal}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Nepal</div>
                                    <img
                                      src={punjab}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Punjab</div>
                                    <img
                                      src={saguenay}
                                      className={"img-rounded"}
                                      alt={"map"}
                                      style={{ marginTop: 20 }}
                                    />
                                    <div>Saguenay</div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.customAccordian}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={classes.customIcons2}
                              />
                            }
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                            className={classes.customAccordianTitle}
                          >
                            <div className={classes.heading}>
                              Scheduling and Other Rules
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <ul>
                                <li style={{ paddingTop: 10 }}>
                                  The players have voted through a majority and
                                  there will be NO FEEDING before the first 4
                                  minutes of a game. This includes crate
                                  gathering.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Once a date/time is agreed upon by all players
                                  for a particular match, everyone must make
                                  their best effort to show up on time. There
                                  will be a penalty for inexcusable delays as
                                  follows:
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Quarterfinals – If a match is delayed by 30
                                  min., the team causing the delay will forfeit.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Semifinals – If a match is delayed by 1 hr.,
                                  the team causing the delay will forfeit.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  Finals – If a match is delayed by 1 hr., the
                                  team causing the delay will forfeit.
                                </li>
                                <li style={{ paddingTop: 10 }}>
                                  If any conflict arises during the tournament,
                                  tournament admins will discuss potential
                                  remedies and hold a vote on outcomes. NO
                                  tournament admins will take place in the
                                  tournament and no player actively playing in
                                  the tournament will have ANY say in committee
                                  actions.
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Collapse>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Col>

        <Col xl={2} xs={12}>
          <RightContent />
        </Col>

        <Col xl={1}></Col>
      </Row>
    </div>
  );
}

export default HelterSkelter;
