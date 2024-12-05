import React from 'react'
import {Link} from 'react-router-dom'
import { FaMapPin } from 'react-icons/fa';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const [ job, setJob] = useState(null);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchJob = async() => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
        
                setJob(data);
        
              } catch (error) {
                console.log('Error Fetching Data')
              } finally {
                setLoading(false);
              }
        }

        fetchJob();
    }, [])


  return loading ? <Spinner /> : (
  <div className='max-w-[1200px] mx-auto my-6'>
    {/* <Link to='/all_jobs'><button className=''>Back to Jobs</button></Link> */}
    <div className='grid grid-cols-5'>
    <div className='col-span-3'>
    <div className=' my-5 px-5 py-2 rounded-lg shadow-lg text-md mx-8'>
    <h1 className='px-2'>{job.type}</h1>
    <h1 className='font-bold text-3xl py-[2px]'>{job.title}</h1>
    <div className='flex'>
         <FaMapPin className='my-4 size-4 mr-1'/>
         <p className='text-gray-600 italic my-3 text-lg'>{job.location}</p>
          </div> 
    </div>
    <div className=' my-5 px-5 py-2 rounded-lg shadow-lg text-md mx-8'>
        <p className='font-bold text-lg py-2'>Job Description:</p>
        <p>{job.description}</p>

        <p className='py-2 text-lg font-bold'>Salary:</p>
        <div className='flex justify-between'>
        <p>{job.salary_range}</p>
        <button className='py-1 px-3 mb-3 bg-[#2ecc71] text-md rounded-md text-white hover:bg-emerald-600 transition-all duration-300 shadow-md'>Apply</button>
        </div>
    </div>
    </div>

    <div className='col-span-2'>
        <div className=' my-5 px-5 pt-2 pb-4 rounded-lg shadow-lg text-md mx-8'>
            <p className='font-bold text-lg py-2'>Company Info</p>
            <p className='font-semibold'>{job.company.name}</p>
            <p className='pb-2'>{job.company.description}</p>
            <hr />
            <p className='font-bold text-md pt-2 pb-1'>Contact Email</p>
            <p className='bg-[#f9f9fb] p-2 rounded-lg'>{job.company.contact_email}</p>

            <p className='font-bold text-md pt-2 pb-1'>Contact Phone</p>
            <p className='bg-[#f9f9fb] p-2 rounded-lg'>{job.company.contact_phone}</p>
        </div>
        <div className=' my-5 px-5 py-2 rounded-lg shadow-lg text-md mx-8'>
            <p className='font-bold text-lg py-2'>Manage Job</p>
            <div className=''>
            <button className='block text-center text-white w-[90%] mx-auto py-1 my-3 rounded-2xl bg-[#2ecc71] hover:bg-emerald-600 transition-all duration-300 shadow-md'>Edit Job</button>
            <button className='block text-white text-center font-semibold w-[90%] mx-auto py-1 my-3 rounded-2xl bg-[#FF0000] hover:bg-[#DC143C] transition-all duration-300 shadow-md'>Delete Job</button>
            </div>
        </div>
    </div>
  </div>
  </div>
);
}

export default JobPage