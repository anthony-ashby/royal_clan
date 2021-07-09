import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import ActiveStreams from "./ActiveStreams";
import RoyalStreams from "./RoyalStreams";
import Hidden from "@material-ui/core/Hidden";
import TwitchApi from "./apis/TwitchApi";
import { useState, useEffect } from "react";

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
});

function RightContent() {
  const classes = useStyles();
  const [royalStreams, setRoyalStreams] = useState([]);
  const [activeStreams, setActiveStreams] = useState([]);
  const [activeStreamIDs, setActiveStreamIDs] = useState([]);
  const [offlineStreams, setOfflineStreams] = useState([]);
  const [royalStreamsArr, setRoyalStreamsArr] = useState([]);
  const [royalStreamsString, setRoyalStreamsString] = useState();
  const [dbUpdatePending, setDbUpdatePending] = useState(false);

  useEffect(() => {
    const fetchLiveStreamData = async () => {
      let streamIDs = [];
      const result = await TwitchApi.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=15"
      );
      result.data.streams.map((stream) => streamIDs.push(stream.channel._id));
      setActiveStreams(result.data.streams);
      setActiveStreamIDs(streamIDs);
    };

    fetchLiveStreamData();

    if (royalStreamsArr.length > 0) {
      let tempString = "";
      royalStreamsArr.forEach((channel) => {
        tempString += `${channel.toLowerCase()},`;
      });
      tempString = tempString.slice(0, -1);
      setRoyalStreamsString(tempString);
    }

    if (royalStreamsString) {
      const fetchOfflineStreamDataFromTwitch = async () => {
        const result = await TwitchApi.get(
          `https://api.twitch.tv/kraken/users?login=${royalStreamsString}`
        );
        setOfflineStreams(result.data.users);
      };
      fetchOfflineStreamDataFromTwitch();
    }
  }, [royalStreamsArr, royalStreamsString]);

  const loadStreams = async () => {
    try {
      const res = await fetch("/.netlify/functions/getRoyalStreams");
      const streams = await res.json();
      if (streams.length > 0) {
        let tempArr = [];
        let tempStr = "";
        streams.forEach((channel) => {
          tempArr.push(channel.name.toLowerCase());
          tempStr += `${channel.name.toLowerCase()},`;
        });
        setRoyalStreamsArr(tempArr);
        setRoyalStreamsString(tempStr);
      }
      setRoyalStreams(streams);
      setDbUpdatePending(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadStreams();
  }, [dbUpdatePending]);

  return (
    <Row className={"no-gutters"}>
      <Col xs={1}></Col>
      <Col xl={11} xs={10} className={classes.root}>
        <RoyalStreams
          royalStreams={royalStreams}
          setDbUpdatePending={setDbUpdatePending}
          activeStreams={activeStreams}
          royalStreamsArr={royalStreamsArr}
          activeStreamIDs={activeStreamIDs}
          offlineStreams={offlineStreams}
        />
        <ActiveStreams
          royalStreams={royalStreams}
          setDbUpdatePending={setDbUpdatePending}
          activeStreams={activeStreams}
          royalStreamsArr={royalStreamsArr}
          activeStreamIDs={activeStreamIDs}
          offlineStreams={offlineStreams}
        />
      </Col>
      <Hidden only={["xl"]}>
        <Col xs={1}></Col>
      </Hidden>
    </Row>
  );
}

export default RightContent;
