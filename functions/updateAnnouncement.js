const { UPDATE_ANNOUNCEMENT } = require("./utils/announcementQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  const {
    _id: id,
    archived,
    dateCreated,
    dateModified,
    dateArchived,
    createdBy,
    modifiedBy,
    title,
    imageURL,
    videoURL,
    embed,
    body,
    type,
    sections,
  } = JSON.parse(event.body);
  const variables = {
    id,
    archived: false,
    dateCreated,
    dateModified,
    dateArchived,
    createdBy,
    modifiedBy,
    title,
    imageURL,
    videoURL,
    embed,
    body,
    type,
    sections,
  };
  try {
    const { updateAnnouncement: updatedAnnouncement } = await sendQuery(
      UPDATE_ANNOUNCEMENT,
      variables
    );

    return formattedResponse(200, updatedAnnouncement);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
