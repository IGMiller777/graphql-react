import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const root = 'funded-pet-library.moonhighway.com/';

// GraphQL Server
const uri = `https://${root}`;
const httpLink = new HttpLink({
    uri
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: `wss://${root}graphql`,
    }),
);

// Auth
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
});

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    wrappedHttpLink
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    link,
    connectDevTools: true
});

export default client;