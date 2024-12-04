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
        <p className='font-bold '>Job Description</p>
        <p>{job.description}</p>

        <p>Salary</p>
        <p>{job.salary_range}</p>
    </div>
    </div>

    <div className='col-span-2'>
        <div>
            <p>Company Info</p>
            <p>{job.company.name}</p>
            <p>{job.company.description}</p>

            <p>Contact Email</p>
            <p>{job.company.contact_email}</p>

            <p>Contact Phone</p>
            <p>{job.company.contact_phone}</p>
        </div>
        <div>
            <p>Manage Job</p>
            <div className='flex justify-between'>
            <button>Edit Job</button>
            <button>Delete Job</button>
            </div>
        </div>
    </div>
  </div>
  </div>
);
}

export default JobPage