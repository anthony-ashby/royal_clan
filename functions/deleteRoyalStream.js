const { DELETE_STREAM } = require("./utils/royalStreamQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  const { _id: id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteStream: deletedStream } = await sendQuery(
      DELETE_STREAM,
      variables
    );

    return formattedResponse(200, deletedStream);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
