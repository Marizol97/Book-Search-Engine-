import gql from "graphql-tag";

export const getMe = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;
