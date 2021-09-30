import React from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BannerBackground from "../images/main_background.jpg";

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
  storeContainer: {
    height: "80vh",
    width: "100%",
    borderRadius: "0 0 15px 15px",
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
  },
});

function Merch() {
  const classes = useStyles();
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
                  <div className={classes.headerTxt}>Clan Merchandise</div>
                </div>
                <a
                  href="https://royal-clan-2.creator-spring.com/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                  >
                    Visit Official Store
                  </ColorButton>
                </a>

                <iframe
                  className={classes.storeContainer}
                  src="https://royal-clan-2.creator-spring.com/"
                ></iframe>
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

export default Merch;
