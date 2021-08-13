import { gql } from "apollo-boost";
import {
  USER_INFO,
  CASA_DATA,
  INTEGRANTE_DATA,
  CATEGORY_DATA,
} from "./fragments";

export const USER_UPDATE = gql`
  mutation userUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      ...userInfo
    }
  }
  ${USER_INFO}
`;

export const USER_CREATE = gql`
  mutation userCreate {
    userCreate {
      username
      email
    }
  }
`;

export const CASA_CREATE = gql`
  mutation casaCreate($input: CasaCreateInput!) {
    casaCreate(input: $input) {
      ...casaData
    }
  }
  ${CASA_DATA}
`;

export const INTEGRANTE_CREATE = gql`
  mutation integranteCreate($input: IntegranteCreateInput!) {
    integranteCreate(input: $input) {
      ...integranteData
    }
  }
  ${INTEGRANTE_DATA}
`;

export const CATEGORY_CREATE = gql`
  mutation categoryCreate($input: CategoryCreateInput!) {
    categoryCreate(input: $input) {
      ...categoryData
    }
  }
  ${CATEGORY_DATA}
`;
