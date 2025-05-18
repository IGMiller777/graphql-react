import React from 'react';
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { CheckInPet } from "./checkInPet";

export const Pet = () => {
    return (
        <>
            <h2>Pet</h2>
            <CheckInPet/>
            {/*<Profile/>*/}
            {/*<Counter/>*/}
            {/*<List/>*/}
            {/*<SpecialList/>*/}
        </>
    )
}