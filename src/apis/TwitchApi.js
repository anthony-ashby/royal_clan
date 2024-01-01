import axios from "axios";

export const getAccessToken = axios.create({
  baseURL: "https://id.twitch.tv/oauth2/token",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    client_id: `${process.env.REACT_APP_TWITCH_API_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_TWITCH_API_CLIENT_SECRET}`,
    grant_type: "client_credentials",
  },
});

export const getGames = axios.create({
  baseURL: "https://api.twitch.tv/helix/games",
  method: "GET",
  headers: {
    "Client-Id": `${process.env.REACT_APP_TWITCH_API_CLIENT_ID}`,
  },
  params: {
    name: ["Age of Empires III", "Age of Empires IV"],
  },
});

export const getUsers = axios.create({
  baseURL: "https://api.twitch.tv/helix/users?",
  method: "GET",
  headers: {
    "Client-Id": `${process.env.REACT_APP_TWITCH_API_CLIENT_ID}`,
  },
});

export const getLiveStreams = axios.create({
  baseURL: "https://api.twitch.tv/helix/streams",
  method: "GET",
  headers: {
    "Client-Id": `${process.env.REACT_APP_TWITCH_API_CLIENT_ID}`,
  },
  params: {
    // AOE3: 7830, AOEIV: 498482. I don't think these ever change?
    game_id: ["7830", "498482"],
    type: "live",
    first: 100,
  },
});

export const getRoyalVideos = axios.create({
  baseURL: "https://api.twitch.tv/helix/videos?user_id=502627142",
  method: "GET",
  headers: {
    "Client-Id": `${process.env.REACT_APP_TWITCH_API_CLIENT_ID}`,
  },
  params: {
    type: "all",
    first: 5,
  },
});
