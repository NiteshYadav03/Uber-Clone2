import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {

    const [email , setEmail] = useState('')
        const [password , setPassword] = useState('')
        const [captainData, setCaptainData] = useState({})
    
    
    
        const submitHandler = (e) => {
            e.preventDefault()
            setCaptainData({email:email, password:password})
            
            setEmail('')
            setPassword('')
        } 


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>

        <img className='w-14 mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s" alt="" />

        <form onSubmit={(e)=>{
            submitHandler(e)
        }}  >

            <h3 className='text-lg font-medium mb-2'>What's your Email? </h3>

            <input className='px-2 py-4 mb-7 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base'
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type="email" placeholder="your@email.com" required />

            <h3 className='text-lg font-medium  mb-2'>Enter your Password</h3>

            <input className='px-2 py-4 mb-7 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base'  
            value={password} onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Password" required />

            <button className='px-2 py-4 bg-black text-white font-semibold  rounded   w-full text-lg' >Login</button>
        </form >
            <p className='flex flex-row '>Join a fleet?<Link to='/captainsignup' className='block text-blue-600 text-sm mt-0.5 font-normal ' >
            Register as a Captain</Link> </p>
        </div>
        <div>
        <Link to='/login' className='flex flex-row items-center justify-center px-2 py-4 mt-5 bg-[#d5622d] text-white font-semibold  rounded   w-full text-lg' >Sign In as User.</Link>
        </div>
    </div>
  )
}

export default CaptainLogin