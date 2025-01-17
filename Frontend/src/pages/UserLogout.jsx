import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function UserLogout() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

      axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`,  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        }).then((response) => {
            
            localStorage.removeItem('token')
            navigate('/login')
            }) 

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout