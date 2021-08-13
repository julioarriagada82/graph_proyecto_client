import { gql } from "apollo-boost";
import {
  USER_INFO,
  CASA_DATA,
  INTEGRANTE_DATA,
  CATEGORY_DATA,
} from "./fragments";

export const PROFILE = gql`
  query {
    profile {
      ...userInfo
    }
  }
  ${USER_INFO}
`;

export const PUBLIC_PROFILE = gql`
  query publicProfile($username: String!) {
    publicProfile(username: $username) {
      _id
      username
      name
      email
      images {
        url
        public_id
      }
      about
    }
  }
`;

export const ALL_USERS = gql`
  query {
    allUsers {
      ...userInfo
    }
  }
  ${USER_INFO}
`;

export const GET_ALL_HOUSE = gql`
  {
    allCasas {
      ...casaData
    }
  }
  ${CASA_DATA}
`;

export const GET_ALL_CATEGORY = gql`
  {
    allCategorys {
      ...categoryData
    }
  }
  ${CATEGORY_DATA}
`;

export const GET_ALL_INTEGRANTE = gql`
  {
    allIntegrantes {
      ...integranteData
    }
  }
  ${INTEGRANTE_DATA}
`;

export const MESSAGES_BY_USER = gql`
  query {
    messagesByUser {
      ...messageData
    }
  }
  ${MESSAGE_DATA}
`;
