import axios from "axios";

let api = axios.create({
  headers: {
    Accept: "application/vnd.twitchtv.v5+json",
    "Client-ID": "ais3iaj5mbdghs53sws4o0fsv51lhu",
  },
});

export default api;
