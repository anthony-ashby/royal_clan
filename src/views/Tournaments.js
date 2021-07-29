import React, { useState, useEffect } from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
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
  customCard: {
    width: "auto",
    margin: 25,
    backgroundColor: "#45748c",
    color: "#071a33",
  },
  customCardMedia: {
    height: "200px",
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
});

const Tournaments = ({ announcements }) => {
  const classes = useStyles();
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    if (announcements) {
      let filtered = [];
      for (let i = 0; i < announcements.length; i++) {
        if (announcements[i].type === "tournament") {
          filtered.push(announcements[i]);
        }
      }
      setTournaments(filtered);
    }
  }, [announcements]);

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
                    {tournaments.map((tournament) => (
                      <Col xl={4} xs={12} key={tournament._id}>
                        <Link
                          to={`/${tournament.title.split(" ").join("")}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card className={classes.customCard}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.customCardMedia}
                                image={tournament.imageURL}
                                title={tournament.title}
                              />
                              <CardContent className={classes.cardContent}>
                                <h3>{tournament.title}</h3>
                                <div>{parse(tournament.body)}</div>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Link>
                      </Col>
                    ))}
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
};

export default Tournaments;
