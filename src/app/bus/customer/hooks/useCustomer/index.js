import { useState } from "react";
import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

const queryCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
    const [addUser, {data}] = useMutation(queryCreateAccount);
    const [values, setValues] = useState({
        account: {
            name: "",
            password: "",
            username: ""
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
    };

    const save = async () => {
        const {account} = values;
        await addUser({variables: {account}});
    }

    return {
        handleChange,
        save,
        createdAccount: data && data.createAccount
    }
}