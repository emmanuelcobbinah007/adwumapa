import React from 'react'
import jobData from '../jobs.json'
import AllJobListings from '../components/AllJobListings'
import '../App.css'

const AllJobs = () => {

  const jobs = jobData.jobs;

  return (
    <>
    <h1 className='bg-inherit text-center text-2xl font-bold py-8 text-[#2ECC71]'>All Jobs</h1>
    <div className='grid grid-cols-3 max-w-[90%] mx-auto mb-12'>
        {jobs.map((job) => (
            <AllJobListings job = {job} key={job.id}/>
        ))}
      </div>

    </>
  )
}

export default AllJobs