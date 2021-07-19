const { GET_ANNOUNCEMENTS } = require("./utils/announcementQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_ANNOUNCEMENTS);
    const data = res.allAnnouncements.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
