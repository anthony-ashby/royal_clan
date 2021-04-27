const express = require("express");
const router = express.Router();
const CommunityLink = require("../models/communityLinkModel");

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const newLink = new CommunityLink({
    name,
    url,
  });

  newLink.save();
});

router.route("/community_links").get((req, res) => {
  CommunityLink.find().then((foundLinks) => res.json(foundLinks));
});

router.route("/update").post((req, res) => {
  CommunityLink.findOneAndUpdate(
    { _id: req.body._id },
    { name: req.body.name, url: req.body.url },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.route("/delete").post((req, res) => {
  CommunityLink.findOneAndDelete({ _id: req.body._id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
