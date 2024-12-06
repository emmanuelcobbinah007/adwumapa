import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import HomePage from './pages/HomePage';
import AddJob from './pages/AddJob';
import AllJobs from './pages/AllJobs';
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    
    return;
  }

  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    
    return;
  }

  return (
    <Router>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_job" element={<AddJob addJobSubmit={addJob}/>} />
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
