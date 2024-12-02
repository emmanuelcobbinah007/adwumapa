import React from 'react'
import { useEffect, useState } from 'react'
import jobData from '../jobs.json'
import JobListings from './JobListings'
import ViewAllJobs from './ViewAllJobs'

const Jobs = ({jobsPageActive = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchData = async() => {

      try {
        const res = await fetch('http://localhost:5000/jobs');
        const data = await res.json();

        setJobs(data);

      } catch (error) {
        console.log('Error Fetching Data')
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  
     const recentJobs = jobsPageActive ? jobs : jobs.slice(0,3);


  return (
    <div>
         <h1 className='bg-inherit text-center text-2xl font-bold py-8 text-[#2ECC71]'>{jobsPageActive ? 'All Jobs' : 'Browse Jobs'}</h1>
        <div className='grid grid-cols-3 max-w-[90%] mx-auto mb-12'>
        {recentJobs.map((job) => (
            <JobListings job = {job} key={job.id}/>
        ))}
        </div>
        <ViewAllJobs />
    </div>
  )
}

export default Jobs