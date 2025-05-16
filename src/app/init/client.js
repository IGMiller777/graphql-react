import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const uri = 'https://funded-pet-library.moonhighway.com/';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri
    }),
    connectDevTools: true
});

export default client;