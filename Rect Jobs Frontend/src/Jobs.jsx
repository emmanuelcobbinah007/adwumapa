import React from 'react'
import jobData from '../src/jobs.json'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const Jobs = () => {

    const jobs = jobData.jobs;
    const recentJobs = jobs.slice(0,3);

  return (
    <div className=''>
         <h1 className='bg-inherit text-center text-2xl font-bold py-8 text-[#2ECC71]'>Browse Jobs</h1>
        <div className='flex max-w-[90%] mx-auto'>
        {recentJobs.map((job) => (
            <JobListings job = {job} key={job.id}/>
        ))}
        </div>
        <ViewAllJobs />
    </div>
  )
}

export default Jobs