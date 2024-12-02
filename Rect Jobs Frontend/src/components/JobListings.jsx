import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import { useState } from 'react';

const JobListings = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;

    if (!showFullDescription) {
        description = description.substring(0,90) + '...';
    }

  return (
    <div className='mx-5 px-5 py-2 rounded-lg shadow-lg text-md w-[100%]'>
        <p className='pt-2'>{job.type}</p>
        <h1 className='font-bold text-xl py-3'>{job.title}</h1>
        <p className='text-sm'>{description}</p>
        <button className='text-[#2ECC71] py-3' onClick={() => setShowFullDescription((prevState) => !prevState)}>{showFullDescription ? 'Less' : 'More'}</button>
        <p className='font-semibold text-[#333] py-1 rounded'>{job.salary_range}</p>
        <hr />
        <div className='flex justify-between'>
         <div className='flex'>
         <FaMapPin className='py-1 my-4 size-6'/>
         <p className='text-gray-600 italic py-1 my-3'>{job.location}</p>
          </div> 
        <button className='bg-[#2d2d2d] text-white px-3 py-1 my-3 rounded shadow-md hover:bg-emerald-600 transition-all duration-300'>Read More</button>
        </div>
    </div>
  )
}

export default JobListings


