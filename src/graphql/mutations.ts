import { gql } from "@apollo/client"

export const CREATE_PASTE = gql`
  mutation createNewPaste(
    $title: String!
    $content: String!
    $syntax_highlight: String!
    $private: Boolean!
    $tags: [String]
  ) {
    createPaste(
      title: $title
      content: $content
      syntax_highlight: $syntax_highlight
      private: $private
      tags: $tags
    ) {
      id
      title
      createdAt
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createNewUser(username: $username, email: $email, password: $password) {
      id
    }
  }
`
