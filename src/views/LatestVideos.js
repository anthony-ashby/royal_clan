import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles, withStyles } from "tss-react/mui";
import ReactPlayer from "react-player";
import BannerBackground from "../images/main_background.jpg";
import logoImg from "../images/royal_clan_logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getRoyalVideos } from "../apis/TwitchApi";
import {
  getYouTubeUploadsPlaylistId,
  getYouTubeUploads,
} from "../apis/YouTubeApi";
import {
  Card,
  CardMedia,
  Avatar,
  Tooltip,
  Zoom,
  IconButton,
  Icon,
} from "@mui/material";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
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
  mainSection: {
    margin: "10px 20px 20px 20px",
    backgroundColor: "black",
  },
  headlineVideoContainer: {
    margin: "0px",
    height: "600px",
  },
  previewContainer: {
    display: "flex",
    backgroundColor: "#111821",
    padding: "10px 15px 0px 15px",
  },
  buttonContainer: {
    display: "inline-flex",
    alignItems: "center",
  },
  cardsContainer: {
    width: "calc(100% - 200px)",
    display: "inline-flex",
  },
  cardRoot: {
    cursor: "pointer",
    height: "200px",
    margin: "0px 5px",
    backgroundColor: "#051429",
    color: "#71ccdf",
    border: "2px solid black",
    "&:hover": {
      boxShadow: "0 0px 5px #71ccdf",
    },
    "& a:link, a:visited, a:active": {
      textDecoration: "none",
      backgroundColor: "#051429",
    },
    "& a:hover": {
      textDecoration: "none",
      backgroundColor: "#051429",
    },
  },
  cardDetails: {
    textAlign: "left",
    width: "100%",
    padding: "5px 10px",
    backgroundColor: "#051429",
    color: "#71ccdf",
  },
  twitchBrand: {
    position: "absolute",
    right: "12px",
    top: "8px",
  },
  youTubeBrand: {
    position: "absolute",
    right: "12px",
    top: "8px",
  },
  cardAvatar: {
    backgroundColor: "black",
    display: "inline-block",
    marginRight: "5px",
  },
  cardInfo: {
    width: "calc(100% - 45px)",
    display: "inline-block",
  },
  cardActive: {
    border: "2px solid #71ccdf",
  },
  cardInactive: {
    border: "none",
  },
  cardTitle: {
    fontSize: 12,
    color: "#71ccdf",
  },
  cardSubTitle: {
    fontSize: 12,
    color: "#71ccdf",
  },
});

const LatestVideos = ({ twitchAccessToken }) => {
  const { classes, cx } = useStyles();
  const [videoPlayerUrl, setVideoPlayerUrl] = useState([]);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [twitchVideos, setTwitchVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [currVideos, setCurrVideos] = useState([]);
  const [currVideosIndex, setCurrVideosIndex] = useState(0);

  useEffect(() => {
    getYouTubeUploadsPlaylistId()
      .then((playlistRes) => {
        const playlistId =
          playlistRes.data.items[0].contentDetails.relatedPlaylists.uploads;
        getYouTubeUploads({
          params: {
            playlistId: playlistId,
          },
        })
          .then((uploadsRes) => {
            const videos = [];
            const uploads = uploadsRes.data.items;
            uploads.forEach((vid) => {
              videos.push({
                id: vid.snippet.resourceId.videoId,
                type: "YouTube",
                url: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
                publishedAt: vid.snippet.publishedAt,
                fullTitle: vid.snippet.title,
                truncTitle:
                  vid.snippet.title.length <= 55
                    ? vid.snippet.title
                    : vid.snippet.title.slice(0, 55) + "...",
                thumbnailUrl: vid.snippet.thumbnails.medium.url,
              });
            });
            setYouTubeVideos(videos);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (twitchAccessToken && twitchAccessToken.length !== 0) {
      getRoyalVideos({
        headers: {
          Authorization: `Bearer ${twitchAccessToken}`,
        },
      })
        .then((res) => {
          const videos = [];
          const response = res.data.data;
          response.forEach((vid) => {
            videos.push({
              id: vid.id,
              type: "Twitch",
              url: vid.url,
              publishedAt: vid.published_at,
              fullTitle: vid.title,
              truncTitle:
                vid.title.length <= 55
                  ? vid.title
                  : vid.title.slice(0, 55) + "...",
              thumbnailUrl: vid.thumbnail_url
                .replace("%{width}", "320")
                .replace("%{height}", "180"),
            });
          });
          setTwitchVideos(videos);
          setVideoPlayerUrl(videos[0].url);
        })
        .catch((err) => console.log(err));
    }
  }, [twitchAccessToken]);

  useEffect(() => {
    const allVids = twitchVideos
      .concat(youTubeVideos)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    setAllVideos(allVids);
  }, [twitchVideos, youTubeVideos]);

  useEffect(() => {
    if (allVideos) {
      setCurrVideos(allVideos.slice(currVideosIndex, currVideosIndex + 4));
    }
  }, [allVideos, currVideosIndex]);

  const changeVideoUrl = (newUrl) => {
    setVideoPlayerUrl(newUrl);
    setVideoPlaying(true);
    setVideoMuted(false);
  };

  const handlStepBackward = () => {
    if (currVideosIndex > 0) {
      setCurrVideosIndex(currVideosIndex - 1);
    }
  };

  const handlStepForward = () => {
    const maxIndex = allVideos.length - 4;
    if (currVideosIndex < maxIndex) {
      setCurrVideosIndex(currVideosIndex + 1);
    }
  };

  const StepButton = withStyles(IconButton, () => ({
    root: {
      height: "40px",
      color: "#71ccdf",
      "&:hover": {
        backgroundColor: "#71ccdf",
        color: "#071a33",
      },
    },
  }));

  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTxt}>Latest Content</div>
        </div>
        <div className={classes.mainSection}>
          <div className={classes.headlineVideoContainer}>
            {videoPlayerUrl && (
              <ReactPlayer
                key={videoPlayerUrl}
                height={600}
                width={"100%"}
                url={videoPlayerUrl}
                controls
                playing={videoPlaying}
                muted={videoMuted}
                volume={0.05}
              />
            )}
          </div>

          <div className={classes.previewContainer}>
            <div className={classes.buttonContainer}>
              <StepButton
                onClick={handlStepBackward}
                disabled={currVideosIndex <= 0}
              >
                <ArrowBackIcon />
              </StepButton>
            </div>
            <Row
              className={"no-gutters"}
              style={{ display: "flex", height: "100%" }}
            >
              {currVideos &&
                currVideos.map((video) => (
                  <Col xl={3} xs={12} key={video.id}>
                    {video.type === "YouTube" && (
                      <Icon
                        className={cx(
                          "fab fa-youtube-square",
                          classes.youTubeBrand
                        )}
                      />
                    )}
                    {video.type === "Twitch" && (
                      <Icon
                        className={cx("fab fa-twitch", classes.twitchBrand)}
                      />
                    )}
                    <Tooltip
                      title={video.fullTitle}
                      placement="top"
                      TransitionComponent={Zoom}
                      enterDelay={600}
                      enterNextDelay={600}
                    >
                      <Card
                        className={cx(
                          classes.cardRoot,
                          video.url === videoPlayerUrl
                            ? classes.cardActive
                            : classes.cardInactive
                        )}
                        onClick={() => changeVideoUrl(video.url)}
                      >
                        <CardMedia
                          loading="lazy"
                          sx={{ height: 125 }}
                          image={video.thumbnailUrl}
                        />
                        <div className={classes.cardDetails}>
                          <Avatar
                            className={classes.cardAvatar}
                            alt="Royal Logo"
                            src={logoImg}
                          />
                          <div className={classes.cardInfo}>
                            <div className={classes.cardTitle}>
                              {video.truncTitle}
                            </div>
                            <div className={classes.cardSubTitle}>
                              {video.publishedAt.slice(0, 10)}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Tooltip>
                  </Col>
                ))}
            </Row>
            <div className={classes.buttonContainer}>
              <StepButton
                onClick={handlStepForward}
                disabled={currVideosIndex >= allVideos.length - 4}
              >
                <ArrowForwardIcon />
              </StepButton>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LatestVideos;
