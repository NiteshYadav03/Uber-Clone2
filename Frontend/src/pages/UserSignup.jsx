import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext"; 


function UserSignup() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate();
  const { user, setUser } =  useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      
      localStorage.setItem("token", data.token)
      navigate('/home')
    }



    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            className="w-14 mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What's your name? </h3>
            <div className="flex flex-row justify-between  mb-5 gap-3">
              <input
                className="px-2 py-4   bg-[#eeeeee] rounded border w-1/2  text-lg placeholder:text-base"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="firstName"
                required
              />
              <input
                className="px-2 py-4   bg-[#eeeeee] rounded border w-1/2 text-lg placeholder:text-base"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="lastName"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What's your email? </h3>
            <input
              className="px-2 py-4 mb-5 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />

            <h3 className="text-lg font-medium  mb-2">Enter your Password</h3>

            <input
              className="px-2 py-4 mb-5 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <button className="px-2 py-4 bg-black text-white font-semibold  rounded   w-full text-lg">
              Create Account
            </button>
          </form>
          <p className="flex flex-row ">
            Already have a account?
            <Link
              to="/login"
              className="block text-blue-600 text-sm mt-0.5 font-normal "
            >
              Sign In
            </Link>
          </p>
        </div>
        <div>
          <p className="text-xs  leading-tight   ">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Uber and its affiliates to the
            number provided.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
