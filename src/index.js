import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// ertebat ma ro miad bargharar mikoneh ba graphql 
// ApolloClient ertebat ma ba backend graphql miad vasl mikoneh 
const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/ap",

    // * agar data gerefteh beshe dg niaz nabashe dobareh darkhast befrsteim
    // * baray hamin miam yek ja save mikonim ta sg dar khast nafrestim
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // *akhar sar bayad in Apollo ro wrap bokoni door App
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

