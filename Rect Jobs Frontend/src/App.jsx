import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import HomePage from './pages/HomePage';
import AddJob from './pages/AddJob';
import AllJobs from './pages/AllJobs';
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_job" element={<AddJob />} />
        <Route path="/all_jobs" element={<AllJobs />} />
        </Routes>
      <Footer />
    </Router>


    // <>
    // <Header />
    // <Hero />
    // <Cards />
    // <Jobs />
    // <Footer />
    // </>
  )
}

export default App
