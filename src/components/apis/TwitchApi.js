import axios from "axios";

let TwitchApi = axios.create({
  headers: {
    Accept: "application/vnd.twitchtv.v5+json",
    "Client-ID": `${process.env.REACT_APP_TWITCH_API_CLIENTID}`,
  },
});

export default TwitchApi;
