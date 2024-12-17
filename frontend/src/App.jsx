import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import HomePage from './pages/HomePage';
import AddJob from './pages/AddJob';
import EditJobPage from './pages/EditJobPage';
import AllJobs from './pages/AllJobs';
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const addJob = async(newJob) => {
    const res = await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    
    return;
  }

  const deleteJob = async(id) => {
    const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: 'DELETE',
    });
    
    return;
  }

  const updateJob = async(job) => {
    const res = await fetch(`http://localhost:5000/api/jobs/${job.id}`, {
      method: 'PUT',
      body: JSON.stringify(job),
    });
    
    return;
  } 

  return (
    <Router>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_job" element={<AddJob addJobSubmit={addJob}/>} />
        <Route path="/edit_job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} />
        <Route path="/all_jobs" element={<AllJobs />} />
        <Route path="/all_jobs/:id" element={<JobPage deleteJob={deleteJob}/>} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />

      <Footer />
    </Router>

  )
}

export default App
