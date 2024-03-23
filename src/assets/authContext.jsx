import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { app } from "./firebase-config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged,
} from 'firebase/auth';

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoggedIn(!!user); 
        });

        return () => unsubscribe(); 
    }, [auth]);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                setIsLoggedIn(true);
            })
            .catch(err => setError(err));
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                setIsLoggedIn(true);
            })
            .catch(err => setError(err));
    }

    const signOut = () => {
        signOutFirebase(auth);
        setUser(null);
    }

    return (
        <authContext.Provider value={{ signUp, signIn, signOut, user, setUser, auth, isLoggedIn, setIsLoggedIn, error }}>
            {children}
        </authContext.Provider>
    );
}
