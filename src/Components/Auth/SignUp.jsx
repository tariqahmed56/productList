import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../assets/authContext';

const SignUp = () => {
    const { signUp, signIn, user, error } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') return;
        signUp(email, password)
        navigate('/');

    };

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-3 shadow'>
            <h2 className='text-xl'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
                <label className="block text-gray-700 text-sm font-bold m-0 py-1" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border m-0 p-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <label className="block text-gray-700 text-sm font-bold m-0 py-1" htmlFor="password">password:</label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border m-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />               
                 <button type='submit' className='bg-orange-600 py-2 rounded-sm'>Sign Up</button>
            </form>
            {error && <div>{error.message}</div>}
        </div>
    );
};

export default SignUp;
