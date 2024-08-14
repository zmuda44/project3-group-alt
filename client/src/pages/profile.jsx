import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import AddFriend from '../components/AddFriend/addFriend';
import AddTrip from '../components/AddTrip/addTrip';

function Trips({ trips }) {
    return (
        <div>
            {trips.length > 0 ? (
                trips.map((trip) => (
                    <div key={trip._id}>
                        <h3>{trip.location}</h3>
                        <p>{trip.journalEntry}</p>
                    </div>
                ))
            ) : (
                <p>No trips available</p>
            )}
        </div>
    );
}

const Profile = ({ username }) => {
    const userId = localStorage.getItem('userId');


    const { loading, data } = useQuery(QUERY_USER, {
        variables: { id: userId }
    });    
    console.log(data)

    const trips = data?.user.trips || [];
    console.log(trips);

    return (
        <div>
            {/* Main content */}
            <div id="main-content">
                <h1>Welcome {username}</h1>

                {/* Friends box */}
                <div id="friends-box">
                    <h2>Friends</h2>
                    {/* Add your friends list here */}
                </div>

                <AddFriend />

                <AddTrip />

                {/* Upcoming trips box */}
                <div id="upcoming-trips-box">
                    <h2>Upcoming Trips</h2>
                    <Trips trips={trips} />
             
                </div>

                

                {/* Previous trips box */}
                <div id="previous-trips-box">
                    <h2>Previous Trips</h2>
                    {/* Add your previous trips list here */}
                </div>

                {/* Dream trips box */}
                <div id="dream-trips-box">
                    <h2>Dream Trips</h2>
                    {/* Add your dream trips list here */}
                </div>
            </div>

            {/* User icon box */}
            <div id="user-icon-box">
                {/* Add your user icon here */}
            </div>
        </div>
    );
};

export default Profile;