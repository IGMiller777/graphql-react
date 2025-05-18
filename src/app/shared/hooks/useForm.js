import { useState } from "react";

export const useForm = (initialValues) => {
    const [form, setFormValues] = useState(initialValues);

    const handleChange = (event) => {
        event.persist();

        setFormValues((prevValues) => ({
                ...prevValues,
                [event.target.name]: event.target.value
        }));
    }

    return { handleChange, form, setFormValues }
}