import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useForm } from "../../../../shared/hooks/useForm";

const queryCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
    const [addUser, {data}] = useMutation(queryCreateAccount);
    const {form, handleChange} = useForm(
        {
            name: "",
            password: "",
            username: ""
        }
    )

    const save = async () => {
        await addUser({variables: {account: {...form} }});
    }

    return {
        handleChange,
        save,
        createdAccount: data && data.createAccount
    }
}