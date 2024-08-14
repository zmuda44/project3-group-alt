// import { AuthenticationError } from 'apollo-server-express';  first comment

//This was another big one. needs to be exported as what they export, not the file name

const { User, Trip } = require('../models');
// import { signToken } from './utils/auth';


const resolvers = {
  Query: {
    // Query to fetch all users

    users: async () => {
      return await User.find({});
    },
    user: async (parent, { id }) => {
      return User.findById(id);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {     
    addUser: async (parent, args) => {
      console.log(args)
      try {

        const { username, email, password } = args;

        // Create the user with the provided username, email, and password
        const user = await User.create({ username, email, password });


        // If user creation fails, throw an error
        if (!user) {
          throw new Error('Something is wrong!');
        }

        // Return the created user object
        return user;
      } catch (error) {
        console.error(error);
        // You can throw the error to be caught by the client-side, or return a specific error message
        throw new Error('Failed to create user');
      }
    },
    loginUser: async (parent, { email, password }) => {
  
      const user = await User.findOne({ email });

      if (!user) {
        // 

      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return "incorrect password"
      }

      return user;
    },
    addTrip : async (parent, args) => {
      console.log(args)
      try {

        const { location, journalEntry } = args;

        // Create the user with the provided username, email, and password
        const trip = await Trip.create({ location, journalEntry });

        const user = await User.findOneAndUpdate(
          { _id: args.userId },
          { $addToSet: { trips: trip } },
          { new: true, runValidators: true }
        );
      } catch (error) {
        console.error(error);
        throw new Error('Failed');
      }
    }
  }
}

module.exports = resolvers;
 // export default resolvers;


    // Query to fetch a single user by ID
    // user: async (_, { id }) => {
    //   return await userModel.findById(id);
    // },
    // Query to fetch the currently authenticated user
    // me: async (_, __, context) => {
    //   if (context.user) {
    //     return await userModel
    //       .findById(context.user._id)
    //       .select("-__v -password");
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },


      // Mutation: {
  //   // Mutation for adding a new user
  //   addUser: async (_, { username, email, password }) => {
  //     const user = await userModel.create({ username, email, password });
  //     const token = signToken(user);
  //     return { token, user };
  //   },
  //   // Mutation for logging in an existing user
  //   loginUser: async (_, { email, password }) => {
  //     const user = await userModel.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError("No user found with this email address");
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError("Incorrect credentials");
  //     }

  //     const token = signToken(user);
  //     return { token, user };
  //   },
  // },