import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState('false');
    const [currentUser,setcurrentUser] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUsers(storedUsers);
        //  setIsLoggedIn(localStorage.getItem('isLogin'))
        }
        setError('')
    }, []);

    const signUp = (email, password) => {
        // Check if email already in 
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            setError("Email already exists. If it's your account, please sign in.");
        } else {
            // new user
            const newUser = { email, password };
            const updatedUsers = [...users, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            localStorage.setItem('isLogin' , true);
            setIsLoggedIn(true);
            localStorage.setItem('currentUser', JSON.stringify(email));
                setcurrentUser(JSON.parse(localStorage.getItem('currentUser')));
        }
    }

    const signIn = (email, password) => {
        // Find user by email
        const user = users.find(user => user.email === email);
        if (user) {
            // Check password
            if (user.password === password) {
                localStorage.setItem('isLogin',true);
                setIsLoggedIn(localStorage.getItem('isLogin'))
                setError('sucessfully logged in');
                alert('sucessfully logged in'); 
                localStorage.setItem('currentUser', JSON.stringify(email));
                setcurrentUser(JSON.parse(localStorage.getItem('currentUser')));

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
        localStorage.setItem('isLogin',false);
        setcurrentUser(null)
    }
  

    return (
        <authContext.Provider value={{ signUp, signIn, signOut, users, isLoggedIn, error ,currentUser}}>
            {children}
        </authContext.Provider>
    );
}
