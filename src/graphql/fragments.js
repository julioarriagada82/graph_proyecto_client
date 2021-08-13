import { gql } from "apollo-boost";

export const USER_INFO = gql`
  fragment userInfo on User {
    _id
    name
    username
    email
    images {
      url
      public_id
    }
    about
    createdAt
    updatedAt
  }
`;

export const CASA_DATA = gql`
  fragment casaData on Casa {
    _id
    name
    address
    number
    postedBy {
      _id
      username
    }
  }
`;

export const MESSAGE_DATA = gql`
  fragment messageData on Post {
    _id
    content
    image {
      url
      public_id
    }
    postedBy {
      _id
      username
    }
  }
`;

export const INTEGRANTE_DATA = gql`
  fragment integranteData on Post {
    _id
    rut
    first_name
    last_name
    email
    phone
    postedBy {
      _id
      username
    }
  }
`;

export const CATEGORY_DATA = gql`
  fragment categoryData on Post {
    _id
    name
    description
    postedBy {
      _id
      username
    }
  }
`;
