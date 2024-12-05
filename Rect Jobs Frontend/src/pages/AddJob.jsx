import React from 'react'

const AddJob = () => {
  return (
    <div className='bg-white'>
      <div className='bg-white py-3'></div>
      <div className='w-[50%] mx-auto my-[15px] bg-white rounded-lg shadow-lg'>
        <form>
        <h1 className='bg-inherit text-center text-2xl font-bold py-5 text-[#2ECC71]'>Add Job</h1>
        <div className='px-7'>
        <h2 className='bg-inherit text-lg font-bold py-3 text-black'>Job Info</h2>
        <div>
          <label htmlFor="jobType" className='block font-semibold py-1'>Job Type</label>
          <select name="type" className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'>
            <option value="Full-Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
        <div>
          <label htmlFor="joBTitle" className='block font-semibold py-1'>Title</label>
          <input type="text" 
          className='rounded-lg w-[100%] bg-[#f4f4f9] p-2 my-1'
          placeholder='eg. Software Engineer'/>
        </div>
          <div><label htmlFor="jobDescription">Description</label>
          <textarea 
          name="jobDescription" 
          id="jobDexcription"
          placeholder='Add any job duties, expectations, requirements, etc'
          ></textarea>
        </div>
        <div>
          <label htmlFor="jobSalary">Salary</label>
          <select name="jobSalary" id="jobSalary">
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
        <div>
          <label htmlFor="jobLocation">Location</label>
          <input type="text" 
          placeholder='eg. Miami, FL'/>
        </div>
        </div>

        <div className='px-7'>
        <h2 className='bg-inherit text-lg font-bold py-3 text-black'>Company Info</h2>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="companyDescription">Company Description</label>
          <textarea name="companyDescription" id="companyDescription"></textarea>
        </div>
        <div>
          <label htmlFor="companyEmail">Company Email</label>
          <input type="email"
          id='companyEmail'
          placeholder='Email for Applicants'
          />
        </div>
        <div>
          <label htmlFor="companyPhone">Company Phone</label>
          <input type="tel" 
          id='companyPhone'
            placeholder='Optional Email for Applicants'
          />
        </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddJob








//bg-gradient-to-br from-[#f9f9fb] to-white