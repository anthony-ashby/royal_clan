import React from "react";
import { useState, useEffect } from "react";
import api from "./api";

function ActiveStreams() {
  const [activeStreams, setActiveStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        "https://api.twitch.tv/kraken/streams/?game=Age%20of%20Empires%20III&limit=10"
      );
      setActiveStreams(result.data.streams);
      console.log(result.data.streams);
    };
    fetchData();
  }, []);

  return (
    <div>
      {activeStreams.map((stream) => (
        <div key={stream._id}>{stream.channel.display_name}</div>
      ))}
    </div>
  );
}

export default ActiveStreams;
