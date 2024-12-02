import React from 'react'
import { useEffect, useState } from 'react'
import JobListings from './JobListings'
import ViewAllJobs from './ViewAllJobs'
import Spinner from './Spinner'

const Jobs = ({jobsPageActive = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchData = async() => {
      const apiURL = jobsPageActive ? '/api/jobs' : '/api/jobs?_limit=3';

      try {
        const res = await fetch(apiURL);
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
        {loading ? 
        <Spinner loading = {loading} />
         : 
         <div className='grid grid-cols-3 max-w-[90%] mx-auto mb-12'>
         {recentJobs.map((job) => (
            <JobListings job = {job} key={job.id}/>
        ))}
        </div>
        }
        {jobsPageActive ? '' : <ViewAllJobs />} 
    </div>
  )
}

export default Jobs