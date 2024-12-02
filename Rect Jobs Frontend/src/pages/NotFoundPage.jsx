import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center h-[525px]'>
        <FaExclamationTriangle className='text-yellow-400 text-6xl m-4'/>
        <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl mb-5'>This page does not exist</p>
        <Link to='/' className='bg-[#2ECC71] text-white text-lg px-3 py-1 my-1 rounded shadow-md hover:bg-emerald-600 transition-all duration-300'>Go Back</Link>
    </div>
  )
}

export default NotFoundPage