import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../App.css';

const Header = () => {

  const toggleNavClass = ({ isActive }) => isActive ? 'hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer font-bold' : 'hover:font-bold transition-all duration-300 ease-in-out transform hover:cursor-pointer'

  const [ nav, setNav ] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
          <div className="mt-6 flex mx-auto lg:w-[95%] w-[90%] justify-between"> 
        <NavLink to="/"><h1 className='font-bold lg:text-4xl md:text-3xl text-2xl hover:cursor-pointer text-[#2ECC71]'>adwumapa!</h1></NavLink>
          <ul className='sm:flex text-lg items-center hidden'>
            <NavLink to="/" className={toggleNavClass}><li className='md:px-5 px-3'>Home</li></NavLink>
            <NavLink to="/all_jobs" className={toggleNavClass}><li className='md:px-5 px-3 '>Jobs</li></NavLink>
            <NavLink to="/add_job" className={toggleNavClass}><li className='md:px-5 px-3 '>Post a Job</li></NavLink>
            <NavLink to="/sign_in" className={toggleNavClass}><li className='md:px-5 px-3'>Sign In</li></NavLink>
          </ul>
          <div onClick={handleNav} className='sm:hidden hover:cursor-pointer'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
          </div>

          {/* mobile NavBar */}
          <div className={!nav ? 'sm:hidden fixed left-0 top-0 w-[60%] h-full bg-white border-r border-r-grey-700 shadow-xl ease-in-out duration-500' : 'sm:hidden fixed left-[-100%] top-0 w-[60%] h-full bg-white border-r border-r-grey-700 shadow-xl ease-in-out duration-500'}>
          <NavLink to="/"><h1 className='font-bold text-2xl hover:cursor-pointer text-[#2ECC71] mx-5 mt-6 mb-4'>adwumapa!</h1></NavLink>
            <ul className='text-lg p-4'>
            <NavLink to="/" onClick={handleNav} className={toggleNavClass}><li className='p-4 border-b border-b-grey-700'>Home</li></NavLink>
            <NavLink to="/all_jobs" onClick={handleNav} className={toggleNavClass}><li className='p-4 border-b border-b-grey-700'>Jobs</li></NavLink>
            <NavLink to="/add_job" onClick={handleNav} className={toggleNavClass}><li className='p-4 border-b border-b-grey-700'>Post a Job</li></NavLink>
            <NavLink to="/sign_in" onClick={handleNav} className={toggleNavClass}><li className='p-4'>Sign In</li></NavLink>
            </ul>
          </div>
          
        </div>
  )
}

export default Header






// 
// 