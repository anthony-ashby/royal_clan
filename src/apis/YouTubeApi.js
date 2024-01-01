import axios from "axios";

export const getYouTubeUploadsPlaylistId = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/channels",
  params: {
    part: "contentDetails",
    id: "UCVygB-argZJ4hdEipSSBkrQ",
    key: `${process.env.REACT_APP_YOUTUBE_API_CLIENTID}`,
  },
  headers: {},
});

export const getYouTubeUploads = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${process.env.REACT_APP_YOUTUBE_API_CLIENTID}`,
  },
  headers: {},
});
