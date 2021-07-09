const { GET_STREAMS } = require("./utils/royalStreamQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_STREAMS);
    const data = res.allRoyalStreams.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong!" });
  }
};
