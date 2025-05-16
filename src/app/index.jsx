import { ApolloProvider } from '@apollo/client'
import { Pet } from "./bus/pet";
import client from './init/client';

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Pet/>
        </ApolloProvider>
    )
}