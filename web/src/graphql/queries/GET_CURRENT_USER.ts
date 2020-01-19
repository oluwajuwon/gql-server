import { gql } from 'apollo-boost';

const getCurrentUserQuery = gql`
  query GetCurrentUser {
    currentUser {
      id
      email
    }
  }
`;

export default getCurrentUserQuery;
