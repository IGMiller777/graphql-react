import React from 'react';
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";

export const Pet = () => {
    return (
        <>
            <h2>Pet</h2>
            <Profile/>
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    )
}