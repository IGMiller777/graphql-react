import { loader } from 'graphql.macro';
import { useQuery } from "@apollo/client";

const queryAllCustomers = loader('./gql/queryAllCustomers.graphql');

export const useQueryAllCustomers = () => {
    const { loading, error, data } = useQuery(queryAllCustomers);
    const customers = data ? data.allCustomers : null;

    return { loading, error, customers }
}