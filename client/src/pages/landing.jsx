import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Signup from '../components/SignupForm/signupForm';
import Login from '../components/LoginForm/loginForm';


const Landing = () => {
    return (
        <div>

            <main>
                <div className="card">
                    <h1>Welcome to Nomad Notes</h1>
                    <p>Your Gateway to the World!</p>
        <Signup />
        <Login />
                </div>
            </main>

        </div>
    );
}

export default Landing;

