const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://royal_admin:RoyalClan123@cluster0.txqto.mongodb.net/royal_clan"
);

app.use("/", require("./routes/communityLinkRoute"));

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
