import { gql } from 'apollo-boost';

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!){
    register(email: $email, password: $password)
  }
`;

export default registerMutation;
