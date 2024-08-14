import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user ($id: ID!) {
  user(id: $id) {
    _id
    username
    email
    trips {
      _id
      location
      journalEntry
    }
  }
}
`