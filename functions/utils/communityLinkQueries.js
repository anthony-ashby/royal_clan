const GET_LINKS = `
query {
    allCommunityLinks {
        data {
            name
            _id
            url
            description
            archived
        }
    }
}`;

const CREATE_LINK = `
    mutation($name: String!, $url: String!, $description: String! ) {
        createCommunityLinks( data: { name:$name, url: $url, description: $description, archived: false }) {
            name
            _id
            url
            description
            archived
        }
    }
`;

const UPDATE_LINK = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!  ) {
        updateCommunityLinks( id: $id, data: { name:$name, url: $url, description: $description, archived: $archived }) {
            name
            _id
            url
            description
            archived
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteCommunityLinks( id: $id) {
            _id
        }
    }
`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
};
