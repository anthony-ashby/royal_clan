const { CREATE_ANNOUNCEMENT } = require("./utils/announcementQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const {
    dateCreated,
    dateModified,
    dateArchived,
    createdBy,
    modifiedBy,
    archived,
    title,
    imageURL,
    videoURL,
    embed,
    body,
    type,
    sections,
  } = JSON.parse(event.body);
  const variables = {
    dateCreated,
    dateModified,
    dateArchived,
    createdBy,
    modifiedBy,
    archived,
    title,
    imageURL,
    videoURL,
    embed,
    body,
    type,
    sections,
    archived: false,
  };
  try {
    const { createAnnouncement: createdAnnouncement } = await sendQuery(
      CREATE_ANNOUNCEMENT,
      variables
    );

    return formattedResponse(200, createdAnnouncement);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
