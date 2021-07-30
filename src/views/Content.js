import React from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
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
});

const Content = ({ youtubeVideos, twitchVideos }) => {
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
                  <div className={classes.headerTxt}>Latest Content</div>
                </div>
                <Row className={"no-gutters"}>
                  {twitchVideos !== undefined
                    ? twitchVideos.map((video) => (
                        <Col xl={4} xs={12} key={video._id}>
                          <ReactPlayer
                            url={video.url}
                            controls
                            width="100%"
                            style={{ padding: "20px" }}
                            playing={false}
                            muted={true}
                          />
                        </Col>
                      ))
                    : null}
                </Row>
                <Row className={"no-gutters"}>
                  {youtubeVideos !== undefined
                    ? youtubeVideos.map((video) => (
                        <Col xl={4} xs={12} key={video.id.videoId}>
                          <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            controls
                            width="100%"
                            style={{ padding: "20px" }}
                          />
                        </Col>
                      ))
                    : null}
                </Row>
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

export default Content;
