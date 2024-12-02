import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {

  const toggleNavClass = ({ isActive }) => isActive ? 'px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer font-bold' : 'px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'

  return (
          <div className="mt-6 flex mx-auto max-w-[1200px] justify-between"> 
        <NavLink to="/"><h1 className='font-bold text-4xl hover:cursor-pointer text-[#2ECC71]'>adwumapa!</h1></NavLink>
          <ul className='flex text-lg items-center'>
          <NavLink to="/" className={toggleNavClass}>
            <li>Home</li>
          </NavLink>
            <NavLink to="/all_jobs" className={toggleNavClass}><li>Jobs</li></NavLink>
            <NavLink to="/add_job" className={toggleNavClass}><li>Post a Job</li></NavLink>
            <NavLink to="/sign_in" className={toggleNavClass}><li className='px-3 hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'>Sign In</li></NavLink>
          </ul>
        </div>
  )
}

export default Header






// 
// 