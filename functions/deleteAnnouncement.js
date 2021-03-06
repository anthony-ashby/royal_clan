const { DELETE_ANNOUNCEMENT } = require("./utils/announcementQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  const { _id: id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteAnnouncement: deletedAnnouncement } = await sendQuery(
      DELETE_ANNOUNCEMENT,
      variables
    );

    return formattedResponse(200, deletedAnnouncement);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
