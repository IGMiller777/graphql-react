import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useForm } from "../../../../shared/hooks/useForm";

const queryLogIn = loader('./gql/mutationLogIn.graphql');

export const useLogIn = () => {
    const [logIn, {data, loading, error}] = useMutation(queryLogIn);
    const {form, handleChange} = useForm({
        username: "",
        password: "",
    });

    const save = async () => {
        await logIn({variables: {...form}})
    };

    return {
        handleChange,
        save,
        loading,
        error,
        accountData: data && data.logIn
    }
}