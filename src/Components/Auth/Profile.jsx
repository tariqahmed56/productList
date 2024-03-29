import React from 'react'
import { useContext } from 'react'
import { authContext } from '../../assets/authContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    let {signOut,currentUser} = useContext(authContext);
    console.log(currentUser)
    let navigate = useNavigate();
  return (
    <div className='h-[100dvh] w-full flex flex-col justify-center items-center gap-2 relative'>
      <img src="https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?rs=1&pid=ImgDetMain" alt="profile pic" />
      <h2 className='text-2xl font-mono font-semibold'>Welcome {currentUser}</h2>
      <button onClick={()=>{
        signOut();
        navigate('/');
      }} className='px-4 py-3 bg-orange-700 text-xl absolute top-7 right-10 border-none rounded cursor-pointer text-white'>Sing Out</button>
    </div>
  )
}

export default Profile
