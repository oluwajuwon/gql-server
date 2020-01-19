import { gql } from 'apollo-boost';

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default loginMutation;
