import React, { useState, useContext } from 'react';
import { authContext } from '../../assets/authContext';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const { signUp, signIn, signOut, users, isLoggedIn, error } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') return;
       
            signIn(email, password);
            navigate('/')
        
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-72">
                <h2 className="text-2xl mb-6">Log in</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                    Login
                    </button>
                </div>
                {error && <div className="text-red-600 text-xl">{error}</div>}
            </div>
        </div>
    );
};

export default Login;
