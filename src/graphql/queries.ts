import { gql } from "@apollo/client"

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
      email
      verified
    }
  }
`

export const PASTES = gql`
  query {
    pastes {
      id
      title
      createdAt
      syntax_highlight
    }
  }
`
