import React from 'react'
import '../App.css'

const Header = () => {
  return (
          <div className="mt-6 flex mx-auto max-w-[1200px] justify-between"> 
        <h1 className='font-bold text-4xl hover:cursor-pointer text-[#2ECC71]'>adwumapa!</h1>
          <ul className='flex text-lg items-center'>
            <li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Home</li>
            <li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Jobs</li>
            <li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Post a Job</li>
            <li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Sign In</li>
          </ul>
        </div>
  )
}

export default Header