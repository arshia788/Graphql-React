import React from 'react';

import { gql, useQuery } from "@apollo/client";

// omadi hamoon graphql ro gerefti va inja copy kardi 
const GET_USERS = gql`
query{
    users{
      data{
        id,
        name,
        email,
        phone,
      }
    }
  }
`;

const Users = () => {

    // omadi inja loading ro gerefti ke biay bebeini hanoo gerefti ya na
    // data hamoon query ma mishe 
    // error ham barat inke agar be error khordim 
    const { loading, data, error } = useQuery(GET_USERS);
    console.log(data, loading, error);

    // gofti agar to halat loading bodim bia in ro neshon bedeh 
    // zamani ke loading false beshe miad users ro neshon mideh
    if (loading) return <h3>loading..</h3>

    if (error) return <h3>Ooops...</h3>

    return (
        <div className='text-center'>
            {/* inja omadi on data ro map zadi  */}
            {
                data.users.data.map(item => <div
                className='mb-8 bg-gray-500 text-white'
                 key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                </div>

                )
            }
        </div>
    );
};

export default Users;