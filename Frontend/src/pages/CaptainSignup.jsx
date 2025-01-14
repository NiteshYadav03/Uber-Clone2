import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CaptainSignup() {
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {

    e.preventDefault()
    setCaptainData({username:{
      firstname:firstname,lastname:lastname
    },email:email, password
    :password})
     
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    }






  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            className="w-14 mb-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s"
            alt=""
          />

          <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
          >

            <h3 className="text-lg font-medium mb-2">What's your name? </h3>
            <div className="flex flex-row justify-between  mb-5 gap-3">
            <input
              className="px-2 py-4   bg-[#eeeeee] rounded border w-1/2  text-lg placeholder:text-base"
              type="text"
              value={firstname} onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
              required
            />
            <input
              className="px-2 py-4   bg-[#eeeeee] rounded border w-1/2 text-lg placeholder:text-base"
              type="text"
              value={lastname} onChange={(e) => setLastname(e.target.value)}
              placeholder="Lastname"
              
            />

            </div>
            <h3 className="text-lg font-medium mb-2">What's your email? </h3>
            <input
              className="px-2 py-4 mb-5 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
              type="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />

            

            <h3 className="text-lg font-medium  mb-2">Enter your Password</h3>

            <input
              className="px-2 py-4 mb-5 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
              type="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <button className="px-2 py-4 bg-black text-white font-semibold  rounded   w-full text-lg">
              Login
            </button>
          </form>
          <p className="flex flex-row ">
           Already have a account?
            <Link
              to="/captainlogin"
              className="block text-blue-600 text-sm mt-0.5 font-normal "
            >
              Sign In
            </Link> 
          </p>
        </div>
        <div>
          <p className="text-xs  leading-tight   ">
           This site is protected by reCAPTCHA and the <span className='text-blue-500 underline' > Google Privacy Policy</span> and <span className='text-blue-500 underline' >Terms of Service apply. </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CaptainSignup