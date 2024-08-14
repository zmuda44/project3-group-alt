//left out all dates
// make sure user is changed to auth on return queries when its working

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profile: String
    trips: [Trip]
    friends: [User]
  }
  type Trip {
    _id: ID
    location: String
    journalEntry: String
    comments: [Comment]
  }
    type Comment {
    _id: ID
    comment: String
    username: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    addTrip(userId: ID!, location: String!, journalEntry: String!): User
    addComment(commentText: String!): Comment
    removeComment(commentId: ID!): Comment
  }


`;

module.exports = typeDefs;

// type Auth {
//   token: String
//   user: User
// }