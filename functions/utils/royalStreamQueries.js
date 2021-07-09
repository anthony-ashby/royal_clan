const GET_STREAMS = `
query {
    allRoyalStreams {
        data {
            name
            _id
            url
        }
    }
}`;

const CREATE_STREAM = `
    mutation($name: String!, $url: String! ) {
        createRoyalStreams( data: { name:$name, url: $url }) {
            name
            _id
            url
        }
    }
`;

const DELETE_STREAM = `
  mutation($id: ID!) {
        deleteRoyalStreams( id: $id) {
            _id
        }
    }
`;

module.exports = {
  GET_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
};
