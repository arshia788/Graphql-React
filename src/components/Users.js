import React from 'react';

import { gql, useQuery } from "@apollo/client";

// omadi hamoon graphql ro gerefti va inja copy kardi 
const GET_USERS = gql`
query{
  users{
    data{
      name,
      email,
    }
  }
}
`;

const Users = () => {

    const {data, loading, error} = useQuery(GET_USERS)
    console.log(data);
    if(loading) return <h1>loading...</h1>

    if(error) return <h2>Ooops...</h2>

    return (
        <div className='text-center'>
          
        </div>
    );
};

export default Users;