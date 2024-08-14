import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/header';
import LandingPage from './gb-front-end/pages/landingPage';
import Profile from './pages/profile';
import Signup from './components/SignupForm/signupForm';
import Login from './components/LoginForm/loginForm';
import Calendar from './components/calendar';
import Footer from './components/footer';


const httpLink = new createHttpLink();

// took out authentication.  see mod 21 challenge for code
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
    <ApolloProvider client={client}>
    <Header />
    <Outlet />
    <Footer />


    </ApolloProvider>
  </div>
  );
}

export default App
