import { loader } from 'graphql.macro';
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
    const [_checkIn, { data, errors }] = useMutation(mutationCheckIn);
    const [error, setError] = useState(false);

    const checkIn = (id) => {
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                })
            } catch (error) {
                setError(error.message);
            }
        })()
    };

    const pet = data && data.checkIn.pet;

    return {
        checkIn,
        pet,
        errors,
        error
    }
}