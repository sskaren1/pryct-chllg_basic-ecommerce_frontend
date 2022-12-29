import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        // uri:'http://localhost:3000/',
        uri: "https://sk1-basic-ecommerce-backend.onrender.com/",
    })
});

export default client;