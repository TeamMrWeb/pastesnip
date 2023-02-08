import { gql } from "@apollo/client"

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
      email
      verified
      createdAt
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

export const USER_BY_ID = gql`
  query ($id: ID!) {
    getUserById(id: $id) {
      id
      username
      email
      verified
      createdAt
    }
  }
`

export const PASTE_BY_ID = gql`
  query ($id: ID!) {
    getPasteById(id: $id) {
      id
      title
      content
      syntax_highlight
      tags
      views
      private
      author {
        id
        username
      }
      createdAt
    }
  }
`
