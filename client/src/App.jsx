import { useState } from 'react'
import './App.css'
import Profile from './pages/profile'
import LandingPage from './gb-front-end/pages/landingPage'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = new createHttpLink({
  uri: '/graphql',
});

// took out authentication.  see mod 21 challenge for code
const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
    <ApolloProvider client={client}>
    <LandingPage />
    <Profile />
    </ApolloProvider>
  </div>
  );
}

export default App
