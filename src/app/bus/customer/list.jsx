import React from 'react';
import { useQueryAllCustomers } from "./hooks/useQueryAllCustomers";

export const List = () => {
    const {loading, error, customers} = useQueryAllCustomers();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const customersJSX = customers && customers.map(({username, name, dateCreated}) => (
        <p key={username}>
            <span>Username: {username}</span>
            <span>Name: {name}</span>
            <span>DateCreated: {dateCreated}</span>

        </p>
    ))

    return (
        <>
            <h1>List</h1>

            {customersJSX}
        </>
    )
}