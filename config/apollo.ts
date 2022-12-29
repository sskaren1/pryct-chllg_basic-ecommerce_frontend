import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'node-fetch';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        // uri:'http://localhost:3000/',
        uri: "https://sk1-basic-ecommerce-backend.onrender.com/",
        // fetch
    })
});

export default client;