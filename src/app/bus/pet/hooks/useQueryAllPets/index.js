import { loader } from 'graphql.macro';
import { useQuery } from "@apollo/client";

const queryAvailablePets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
    const { loading, error, data } = useQuery(queryAvailablePets);
    const pets = data ? data.allPets : null;

    return { loading, error, pets }
}