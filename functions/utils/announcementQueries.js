const GET_ANNOUNCEMENTS = `
query {
    allAnnouncements {
        data {
            _id
            dateCreated
            dateModified
            dateArchived
            createdBy
            modifiedBy
            archived
            title
            imageURL
            videoURL
            embed
            body
            type
            sections
        }
    }
}`;

const CREATE_ANNOUNCEMENT = `
    mutation($dateCreated: String!, $dateModified: String, $dateArchived: String, $createdBy: String!, $modifiedBy: String, $title: String!, $imageURL: String, $videoURL: String, $embed: String, $body: String!, $type: String!, $sections: String) {
        createAnnouncements( data: { dateCreated: $dateCreated, dateModified: $dateModified, dateArchived: $dateArchived, createdBy: $createdBy, modifiedBy: $modifiedBy,archived: false, title: $title, imageURL: $imageURL, videoURL: $videoURL, embed: $embed, body: $body, type: $type, sections: $sections}) {
            _id
            dateCreated
            dateModified
            dateArchived
            createdBy
            modifiedBy
            archived
            title
            imageURL
            videoURL
            embed
            body
            type
            sections
        }
    }
`;

const UPDATE_ANNOUNCEMENT = `
  mutation($id: ID!, $dateCreated: String!, $dateModified: String, $dateArchived: String, $createdBy: String!, $modifiedBy: String, $title: String!, $imageURL: String, $videoURL: String, $embed: String, $body: String!, $type: String!, $sections: String) {
        updateAnnouncements( id: $id, data: { dateCreated: $dateCreated, dateModified: $dateModified, dateArchived: $dateArchived, createdBy: $createdBy, modifiedBy: $modifiedBy, archived: false, title: $title, imageURL: $imageURL, videoURL: $videoURL, embed: $embed, body: $body, type: $type, sections: $sections }) {
            _id
            dateCreated
            dateModified
            dateArchived
            createdBy
            modifiedBy
            archived
            title
            imageURL
            videoURL
            body
            sections
        }
    }
`;

const DELETE_ANNOUNCEMENT = `
  mutation($id: ID!) {
        deleteAnnouncements( id: $id) {
            _id
        }
    }
`;

module.exports = {
  GET_ANNOUNCEMENTS,
  CREATE_ANNOUNCEMENT,
  UPDATE_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
};
