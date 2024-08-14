import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
  }
}
`
export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    _id
}
}
`
export const ADD_TRIP = gql`
mutation AddTrip($userId: ID!, $location: String!, $journalEntry: String!) {
  addTrip(userId: $userId, location: $location, journalEntry: $journalEntry) {
    _id
    
  }
}
`

export default ADD_USER;





// export const LOGIN_USER = gql
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
