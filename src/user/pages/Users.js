import React from 'react';
import UserList from '../components/UsersList';
 
const Users =()=>{
    const USERS = [{
        id: 'u1',
        name: 'Max',
        image: 'https://i0.wp.com/media.globalnews.ca/videostatic/908/231/Tips_for_beginners_buying_camping_gear-5d3b5d02b4b6ed0001192e9f_1_Jul_26_2019_20_25_37_poster.jpg?w=1040&quality=70&strip=all',
        places: 3
    }];

    return <UserList items={USERS}/>
}

export default Users;