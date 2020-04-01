import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/Validators';



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

const UpdatePlace =()=>{
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p=>p.id=== placeId);
    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>Could not find place</h2>
            </div>
        );
    }
    return <form>
        <Input
         id="title" 
         element="input" 
         type="text" 
         lable="Title" 
         validators={[VALIDATOR_REQUIRE()]}
         errorText="Please enter a valid title"
         onInput={()=>{}}
         value={identifiedPlace.title}
         valid={true}
         />
         <Input
         id="description" 
         element="textarea" 
         lable="description" 
         validators={[VALIDATOR_MINLENGTH(5)]}
         errorText="Please enter a valid description (min. 5 characters)."
         onInput={()=>{}}
         value={identifiedPlace.description}
         valid={true}
         />

         <Button type="submit" disable={true}>UPDATE PLACE</Button>

    </form>;
}

export default UpdatePlace;