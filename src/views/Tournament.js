import React, { useState } from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ModifyTournament from "../components/crud/ModifyTournament";
import parse from "html-react-parser";

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
  paper: {
    backgroundColor: "#2e3c45",
    minHeight: "70vh",
    height: "90vh",
    width: "100%",
    borderRadius: 20,
    textAlign: "center",
    color: "#71ccdf",
    padding: 20,
    position: "relative",
    overflowY: "auto",
  },
});

const Tournament = ({ tournament, setAnnouncementsPending }) => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [editing, setEditing] = useState(false);

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

  const handleOpenModifyTournament = () => {
    setEditing(true);
  };

  const handleCloseModifyTournament = () => {
    setEditing(false);
  };

  //   const deleteTournament = () => {
  //     console.log("delete tournament");
  //   };

  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>
        <Col xl={8} xs={12}>
          <Row className={"no-gutters"}>
            <Col xs={1}></Col>
            <Col xl={12} xs={10} className={classes.root}>
              <div className={classes.header}>
                <div className={classes.headerTxt}>{tournament.title}</div>
              </div>
              {!editing && (
                <div>
                  <div style={{ margin: 15, color: "#71ccdf" }}>
                    <div className={classes.buttonContainer}>
                      <Link
                        to="/tournaments"
                        style={{ textDecoration: "none" }}
                      >
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
                                aria-label="modify tournament"
                                placement="top"
                              >
                                <IconButton
                                  aria-label="modify"
                                  className={classes.customEditButton}
                                  onClick={() => handleOpenModifyTournament()}
                                >
                                  <EditIcon className={classes.customIcons} />
                                </IconButton>
                              </Tooltip>
                              {/* <Tooltip
                                title="Delete"
                                aria-label="delete tournament"
                                placement="top"
                              >
                                <IconButton
                                  aria-label="delete"
                                  className={classes.customDeleteButton}
                                  onClick={() => deleteTournament(tournament)}
                                >
                                  <DeleteIcon className={classes.customIcons} />
                                </IconButton>
                              </Tooltip> */}
                            </>
                          )
                        }
                        title={tournament.title}
                        subheader={tournament.subTitle}
                      />
                      <CardMedia
                        className={classes.media}
                        image={tournament.imageURL}
                      />
                      <CardContent className={classes.cardContent}>
                        {parse(tournament.body)}
                      </CardContent>

                      <CardContent className={classes.cardMoreInfo}>
                        {JSON.parse(tournament.sections).map((section) => (
                          <Accordion
                            className={classes.customAccordian}
                            key={section.sectionId}
                          >
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
                                {section.sectionTitle}
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              {parse(parse(section.sectionBody).props.children)
                                .type === "iframe" ? (
                                <div
                                  style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                  }}
                                >
                                  {parse(
                                    parse(section.sectionBody).props.children
                                  )}
                                </div>
                              ) : (
                                parse(section.sectionBody)
                              )}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {editing && (
                <div className={classes.paper}>
                  <ModifyTournament
                    tournament={tournament}
                    setAnnouncementsPending={setAnnouncementsPending}
                    handleCloseModifyTournament={handleCloseModifyTournament}
                  />
                </div>
              )}
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
};

export default Tournament;
