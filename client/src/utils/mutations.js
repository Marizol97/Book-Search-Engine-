import gql from "graphql-tag";

export const loginUser = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const addUser = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const saveBook = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
      username
      _id
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const removeBook = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
