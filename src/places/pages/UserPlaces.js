import React from 'react';
import PlaceList from '../components/PlaceList';




const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State Building',
        description: 'One of the most famouse sky scrapers in the world',
        imageUrl:'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        address: '20 W 34th st, New York, NY ',
        location: {
            lat:40.7484405,
            lng:-73.9877095
        },
        creator:'u1'
    },
    {
        id:'p2',
        title: 'Empire State Building',
        description: 'One of the most famouse sky scrapers in the world',
        imageUrl:'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        address: '20 W 34th st, New York, NY ',
        location: {
            lat:40.7484405,
            lng:-73.9877095
        },
        creator:'u2'
    }
];

const UserPlaces = () =>{
    return <PlaceList items ={DUMMY_PLACES}/>
};

export default UserPlaces;