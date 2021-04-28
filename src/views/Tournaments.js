import React from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import RoyalHelterSkelter from "../images/helter_skelter_announcement.jpg";
import RoyalChallengeEvent from "../images/Royal_Challenge_Event.png";
import { Link } from "react-router-dom";

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
  customCard: {
    width: "auto",
    margin: 25,
    backgroundColor: "#45748c",
    color: "#071a33",
  },
  customCardMedia: {
    height: "200px",
  },
});

function Tournaments() {
  const classes = useStyles();
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
                  <div className={classes.headerTxt}>Tournaments</div>
                </div>

                <div>
                  <Row className={"no-gutters"}>
                    <Col xl={4} xs={12}>
                      <Link
                        to="/helterskelter"
                        style={{ textDecoration: "none" }}
                      >
                        <Card className={classes.customCard}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.customCardMedia}
                              image={RoyalHelterSkelter}
                              title="Royal Helter Skelter"
                            />
                            <CardContent style={{ height: 200 }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                Royal 2v2 Helter Skelter
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                Royal Clan and Elite Gaming Channel join
                                together to bring you the Helter Skelter, a
                                first-of-its-kind 2v2 tournament with random
                                maps, civilizations, and teams! Click for more
                                information.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Link>
                    </Col>
                    <Col xl={4} xs={12}>
                      <Link
                        to="/royalchallengeevent"
                        style={{ textDecoration: "none" }}
                        // onClick={() => openTournament()}
                      >
                        <Card className={classes.customCard}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.customCardMedia}
                              image={RoyalChallengeEvent}
                              title="Royal Challenge Event"
                            />
                            <CardContent style={{ height: 200 }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                Royal Challenge Event
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                This is the Royal Clan Challenge Event! THREE
                                CHALLENGES are laid down by the Clan and in
                                partnership with Elite Gaming Channel! The
                                contestant with the BEST time that meets all the
                                rules WILL WIN $50 for that challenge! Click for
                                more information.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Link>
                    </Col>
                  </Row>
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

export default Tournaments;
