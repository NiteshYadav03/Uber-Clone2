import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'





const App = () => {
  return (
   <>
   <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captainlogin" element={<CaptainLogin />} />
      <Route path="/captainsignup" element={<CaptainSignup />} />
      <Route path="/home" element={ 
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>
      } />
      <Route path="/users/logout" element={ <UserProtectWrapper>
        <UserLogout />
      </UserProtectWrapper>} />
      
      <Route path="/captain-home" element={<UserProtectWrapper>
        <CaptainHome />
      </UserProtectWrapper>} />

   </Routes>
   </>
  )
}

export default App