import React, { useState } from 'react';

import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`

# in ID! ro rafti az hamoon site playground didi ke yani type id hast ID!

query getUser($id: ID!){
  user(id:$id){
    id,
    name,
    email,
    phone
  }
}
`

const User = () => {

    const [id, setId] = useState(2);

    const changeHandler = (e) => {
        setId(e.target.value)
    }

    const {error, loading, data}= useQuery(GET_USER, {

        // motaghir hay ke mikhay dakhel query estefadeh bokoni ro inja midi 
        variables:{id:id}
    })

    console.log({loading, data, error});

    return (
        <div>
            <input
                className='border-2 border-gray-700'
                value={id} onChange={changeHandler} 
                placeholder='enter id' />
        </div>
    );
};

export default User;