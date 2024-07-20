import { gql } from "@apollo/client";
const GET_USERS = gql`
  query {
    users {
      data {
        name
        id
        email
        phone
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($idNumber: ID!) {
    user(id: $idNumber) {
      name
      id
      email
      phone
    }
  }
`;

export { GET_USERS, GET_USER };
