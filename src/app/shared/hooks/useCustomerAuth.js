import { useForm } from "./useForm";

export const useCustomerAuth = () => {
    const {form, handleChange} = useForm({
        username: "",
        password: "",
    })

    console.log(form);

    return { handleChange }
}