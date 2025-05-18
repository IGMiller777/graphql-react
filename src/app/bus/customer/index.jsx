import React from 'react';
import { useCustomerCreator } from "./hooks/useCustomerCreator";

export const Customer = () => {
    const {handleChange, save, createdAccount} = useCustomerCreator();

    const customerJSX = createdAccount && (
        <p>
            We already created customer with name: {createdAccount.name }
        </p>
    )

    return (
        <>
            <h2>Registration</h2>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="text" placeholder="Password" name="password" onChange={handleChange}/>

            <button type="submit" onClick={save}>Save</button>


            {customerJSX}
        </>
    )
}