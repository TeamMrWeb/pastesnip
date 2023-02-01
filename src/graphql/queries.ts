import { gql } from "@apollo/client"

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
      email
    }
  }
`
