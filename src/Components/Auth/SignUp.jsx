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

        setEmail('');
        setPassword('');
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-3 '>
            <h2 className='text-xl'>Signup</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='px-4 py-3 border-teal-100 border-4'/>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='px-4 py-3 border-teal-100 border-4'/>
                <button type='submit' className='bg-blue-400'>Sign Up</button>
            </form>
            {error && <div>{error.message}</div>}
        </div>
    );
};

export default SignUp;
