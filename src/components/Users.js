import React from 'react';

import {  useQuery } from "@apollo/client";
import { GET_USERS } from '../graphql/queries';



const Users = () => {

    const {data, loading, error} = useQuery(GET_USERS)
    console.log(data);
    if(loading) return <h1>loading...</h1>

    if(error) return <h2>Ooops...</h2>

    return (
        <div className='text-center'>
          {
            data.users.data.map(item=> <div 
            className='bg-gray-500 text-center text-white mb-4'
            key={item.id}>
                <p>{item.name}</p>
                <p>{item.email}</p>
            </div> )
          }
        </div>
    );
};

export default Users;