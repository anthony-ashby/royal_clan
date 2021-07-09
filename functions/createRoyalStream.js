const { CREATE_STREAM } = require("./utils/royalStreamQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { name, url } = JSON.parse(event.body);
  const variables = { name, url };
  try {
    const { createStream: createdStream } = await sendQuery(
      CREATE_STREAM,
      variables
    );

    return formattedResponse(200, createdStream);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
