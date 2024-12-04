import React from 'react'
import {Link} from 'react-router-dom'
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
  <div className='max-w-[80%] mx-auto'>
    <Link to='/all_jobs'><button className=''>Back</button></Link>
    <div className='grid grid-cols-5'>
    <div className='col-span-3'>
    <div>
    <h1>{job.type}</h1>
    <h1>{job.title}</h1>
    <h1>{job.location}</h1>
    </div>
    <div>
        <p>Job Description</p>
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
        <div>Manage Job</div>
    </div>
  </div>
  </div>
);
}

export default JobPage