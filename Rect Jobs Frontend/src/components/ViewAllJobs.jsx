import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <Link to="/all_jobs">
    <div className='mx-auto w-[40%] text-center bg-[#2ECC71] text-white text-lg my-10 py-2 rounded-xl hover:cursor-pointer hover:bg-emerald-600 transition-all duration-300'>
        <button>View All Jobs.</button>
    </div>
    </Link>
  )
}

export default ViewAllJobs