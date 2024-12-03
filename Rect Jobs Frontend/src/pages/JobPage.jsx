import React from 'react'
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
  <h1>{job.title}</h1>
);
}

export default JobPage