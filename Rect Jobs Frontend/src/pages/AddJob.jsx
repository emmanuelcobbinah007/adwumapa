import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = ({ addJobSubmit }) => {
  const [type, setType] = useState('Full-Time');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      type,
      title,
      description,
      salary_range: salary,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contact_email: contactEmail,
        contact_phone: contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success('Job Added Successfully');

    return navigate('/all_jobs')

  }


  return (
    <div className='bg-white'>
      <div className='bg-white py-3'></div>
      <div className='lg:w-[50%] w-[85%] mx-auto mt-[15px] mb-16 bg-white rounded-lg shadow-lg pb-5'>
        <form
        onSubmit={submitForm}>
        <h1 className='bg-inherit text-center text-2xl font-bold py-5 text-[#2ECC71]'>Add Job</h1>
        <div className='px-7'>
        <h2 className='bg-inherit text-lg font-bold py-3 text-black'>Job Info</h2>
        <div className='mb-4'>
          <label htmlFor="jobType" className='block font-semibold py-1'>Job Type</label>
          <select 
          id='type' 
          name="type"
          value={type} 
          onChange={(e) => setType(e.target.value)}
          required 
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'>
            <option value="Full-Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor="joBTitle" className='block font-semibold py-1'>
            Title
          </label>
          <input 
          type="text"
          id='title'
          name='title'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          placeholder='eg. Software Engineer'/>
        </div>
          <div className='mb-4'>
            <label 
            htmlFor="jobDescription" 
            className='block font-semibold py-1'>
              Description
            </label>
          <textarea 
          name="jobDescription" 
          id="jobDescription"
          placeholder='Add any job duties, expectations, requirements, etc'
          required
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          rows={4}
          ></textarea>
        </div>
        <div className='mb-4'>
          <label htmlFor="jobSalary" className='block font-semibold py-1'>Salary</label>
          <select 
          name="jobSalary" 
          id="jobSalary" 
          required 
          value={salary} 
          onChange={(e) => setSalary(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'>
            <option value='Under $50K'>Under $50K</option>
            <option value='$50K - 60K'>$50K - $60K</option>
            <option value='$60K - 70K'>$60K - $70K</option>
            <option value='$70K - 80K'>$70K - $80K</option>
            <option value='$80K - 90K'>$80K - $90K</option>
            <option value='$90K - 100K'>$90K - $100K</option>
            <option value='$100K - 125K'>$100K - $125K</option>
            <option value='$125K - 150K'>$125K - $150K</option>
            <option value='$150K - 175K'>$150K - $175K</option>
            <option value='$175K - 200K'>$175K - $200K</option>
            <option value='Over $200K'>Over $200K</option>
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor="jobLocation" className='block font-semibold py-1'>Location</label>
          <input 
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          id='jobLocation'
          name='jobLocation'
          required
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          placeholder='eg. Miami, FL'/>
        </div>
        </div>

        <div className='px-7'>
        <h2 className='bg-inherit text-lg font-bold py-3 text-black'>Company Info</h2>
        <div className='mb-4'>
          <label htmlFor="companyName" className='block font-semibold py-1'>Name</label>
          <input 
          id='companyName'
          name='companyName'
          type="text"
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          placeholder='Enter Company Name' />
        </div>
        <div>
          <label htmlFor="companyDescription" className='block font-semibold py-1'>Description</label>
          <textarea 
          name="companyDescription" 
          id="companyDescription"
          rows='4'
          placeholder='What does your company do?'
          value={companyDescription} 
          onChange={(e) => setCompanyDescription(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'></textarea>
        </div>
        <div className='mb-4'>
          <label 
          htmlFor="contactEmail"
          className='block font-semibold py-1'>Contact Email</label>
          <input type="email"
          id='contact_email'
          name='contact_email'
          placeholder='Email for Applicants'
          required
          value={contactEmail} 
          onChange={(e) => setContactEmail(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          />
        </div>
        <div className='mb-4'>
          <label 
          htmlFor="contactPhone" 
          className='block font-semibold py-1'>Contact Phone</label>
          <input type="tel" 
          id='contact_phone'
          name='contact_phone'
          placeholder='Optional Email for Applicants'
          value={contactPhone} 
          onChange={(e) => setContactPhone(e.target.value)}
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          />
        </div>
        
        <button className='mx-auto w-full text-center bg-[#2ECC71] text-white text-lg my-2 py-2 rounded-xl hover:cursor-pointer hover:bg-emerald-600 transition-all duration-300'
          type='submit'>
          Add Job
        </button>

        </div>

        </form>
      </div>
    </div>
  )
}

export default AddJob








