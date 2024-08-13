import { gql } from '@apollo/client';

const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
  }
}
`
console.log("hit");

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
