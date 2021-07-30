import axios from "axios";

let YouTubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 3,
    order: "date",
    key: `${process.env.REACT_APP_YOUTUBE_API_CLIENTID}`,
  },
  headers: {},
});

export default YouTubeApi;
