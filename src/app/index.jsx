import { ApolloProvider } from '@apollo/client';
import client from './init/client';
import { Login } from "./bus/login";
import { Pet } from "./bus/pet";
import { Link, Route, Routes, Na, useNavigate } from "react-router-dom";
import { Customer } from "./bus/customer";
import React, { useEffect } from "react";
import { Home } from "./bus/home";

export const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [])

    return (
        <ApolloProvider client={client}>
            <nav>
                <ul>
                    <li><Link to="/pets">Pets</Link></li>
                    <li><Link to="/customer">Customer</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/pets" element={<Pet/>}/>
                <Route path="/customer" element={<Customer/>}/>
            </Routes>
        </ApolloProvider>
    )
}