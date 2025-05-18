import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const queryLogIn = loader('./gql/mutationLogIn.graphql');

export const useLogIn = () => {
    const [logIn, {data, loading, error}] = useMutation(queryLogIn);
    const [values, setValues] = useState({
        account: {
            username: "",
            password: "",
        }
    });

    const handleChange = (event) => {
        event.persist();

        setValues((prevValues) => ({
            account: {
                ...prevValues.account,
                [event.target.name]: event.target.value
            }
        }));
    }

    const save = async () => {
        const {account} = values;

        await logIn({variables: {...account}})
    }

    return {
        handleChange,
        save,
        loading,
        error,
        accountData: data && data.logIn
    }
}