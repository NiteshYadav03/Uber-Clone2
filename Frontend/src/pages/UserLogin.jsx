import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext"; 


function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
   const { user, setUser } =  useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200) {
       const data= response.data;
       setUser(data.user);
        localStorage.setItem("token", data.token);
      navigate('/home');
      }

    setEmail("");
    setPassword("");
  };

  return (
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
          <h3 className="text-lg font-medium mb-2">What's your Email? </h3>

          <input
            className="px-2 py-4 mb-7 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your@email.com"
            required
          />

          <h3 className="text-lg font-medium  mb-2">Enter your Password</h3>

          <input
            className="px-2 py-4 mb-7 bg-[#eeeeee] rounded border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />

          <button className="px-2 py-4 bg-black text-white font-semibold  rounded   w-full text-lg">
            Login
          </button>
        </form>
        <p className="flex flex-row ">
          Don't have an account?
          <Link
            to="/signup"
            className="block text-blue-600 mt-0.5 text-sm font-normal "
          >
            Sign Up
          </Link>{" "}
        </p>
      </div>
      <div>
        <Link
          to="/captainlogin"
          className="flex flex-row items-center justify-center px-2 py-4 mt-5 bg-[#10B461] text-white font-semibold  rounded   w-full text-lg"
        >
          Sign In as Captain.
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
