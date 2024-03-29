import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUsers(storedUsers);
        }
        setError('')
    }, []);

    const signUp = (email, password) => {
        // Check if email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            setError("Email already exists. If it's your account, please sign in.");
        } else {
            // Register new user
            const newUser = { email, password };
            const updatedUsers = [...users, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            setIsLoggedIn(true);
        }
    }

    const signIn = (email, password) => {
        // Find user by email
        const user = users.find(user => user.email === email);
        if (user) {
            // Check password
            if (user.password === password) {
                setIsLoggedIn(true);
                setError('sucessfully logged in ');

            } else {
                setError("Invalid email or password");
                console.log(error)
            }
        } else {
            setError("User not found. Please sign up first.");
        }
    }

    const signOut = () => {
        setIsLoggedIn(false);
    }
  

    return (
        <authContext.Provider value={{ signUp, signIn, signOut, users, isLoggedIn, error }}>
            {children}
        </authContext.Provider>
    );
}
