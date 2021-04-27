const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const communityLinkSchema = {
  name: String,
  url: String,
};

const CommunityLink = mongoose.model("community_links", communityLinkSchema);

module.exports = CommunityLink;
