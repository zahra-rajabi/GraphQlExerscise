import { gql } from "@apollo/client";
const CREATE_USER = gql`
  mutation createuser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      name
      username
      phone
      email
      id
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export { CREATE_USER, DELETE_USER };
