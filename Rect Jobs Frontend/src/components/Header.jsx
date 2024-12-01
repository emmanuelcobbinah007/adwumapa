import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
          <div className="mt-6 flex mx-auto max-w-[1200px] justify-between"> 
        <Link to="/"><h1 className='font-bold text-4xl hover:cursor-pointer text-[#2ECC71]'>adwumapa!</h1></Link>
          <ul className='flex text-lg items-center'>
          <Link to="/"><li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Home</li></Link>
            <Link to="/all_jobs"><li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Jobs</li></Link>
            <Link to="/add_job"><li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Post a Job</li></Link>
            <li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Sign In</li>
          </ul>
        </div>
  )
}

export default Header