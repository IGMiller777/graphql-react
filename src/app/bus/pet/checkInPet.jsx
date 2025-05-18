import React from "react";

import { useCheckIn } from "./hooks/useCheckIn";

export const CheckInPet = () => {
    const { checkIn, pet, errors, error } = useCheckIn();

    const petJSX = pet && (
        <>
            <p>Id: { pet.id }</p>
            <p>Name: { pet.name }</p>
        </>
    );

    const errorsJSX = errors && (
        <p>
            We have a problem: {errors.message}
        </p>
    );

    const errorJSX = error && (
        <p>
            We have another problem: {error}
        </p>
    );

    return (
        <>
            <h1>Checkin</h1>
            <button onClick={() => checkIn('C-1')}>CheckIn</button>
            {petJSX}
            {errorsJSX}
            {errorJSX}
        </>
    )
}