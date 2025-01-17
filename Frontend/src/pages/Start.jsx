import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div className='bg-cover bg-bottom  bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] h-screen pt-8 w-full flex flex-col  justify-between '>
            <img className='w-14 ml-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold ' >Get Start with Uber</h2>
                <Link to='/login' className='flex w-full items-center justify-center bg-black py-3 text-white rounded mt-4' > 
                Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start