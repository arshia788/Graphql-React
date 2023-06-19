import React, { useState } from 'react';

import { gql, useQuery } from "@apollo/client";
import { GET_USER } from '../graphql/queries';


const User = () => {

    const [id, setId] = useState(2);

    const changeHandler = (e) => {
        setId(e.target.value)
    }

    const { error, loading, data } = useQuery(GET_USER, {
        // motaghir hay ke mikhay dakhel query estefadeh bokoni ro inja midi 
        variables: { id: id }
    })

    console.log({ loading, data, error });

    return (
        <div>
            <input
                className='border-2 border-gray-700'
                value={id} onChange={changeHandler}
                placeholder='enter id' />

            {
                data &&<div>
                    <p>{data.user.name}</p>
                    <p>{data.user.email}</p> 
                </div>
            }

        </div>
    );
};

export default User;