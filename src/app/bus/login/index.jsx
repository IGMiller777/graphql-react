import React, { useEffect } from 'react';
import { useLogIn } from './hooks/useLogIn';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const {handleChange, save, accountData, loading, error} = useLogIn();

    useEffect(() => {
        if(accountData?.token) {
            localStorage.setItem('token', accountData?.token);
            navigate('/home')
        }
    }, [accountData?.token]);

    if (loading) {
        return <h1>Идет проверка пользователя...</h1>;
    }

    if (error) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="text" placeholder="Password" name="password" onChange={handleChange}/>

            <button type="submit" onClick={save}>LogIn</button>
        </>
    )
}