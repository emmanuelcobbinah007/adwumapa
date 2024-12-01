import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#111]'>
        <div className='max-w-[1200px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='m-4 w-full text-3xl font-bold text-[#2ECC71]'>adwumapa!</h1>
        <p className='py-4'>Discover your next opportunity! Whether you're an artisan, professional, or employer, our platform connects talent with endless possibilities. Join us today and take the next step toward success!</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaLinkedin size={30} />
            <FaYoutube size={30} />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Job Matching</li>
                <li className='py-2 text-sm'>Skill Development</li>
                <li className='py-2 text-sm'>Freelance Connections</li>
                <li className='py-2 text-sm'>Talent Acquisition</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>For Job Seekers</h6>
            <ul>
                <li className='py-2 text-sm'>Browse Jobs</li>
                <li className='py-2 text-sm'>Career Advice</li>
                <li className='py-2 text-sm'>Build Your Resume</li>
                <li className='py-2 text-sm'>AApplication Tips</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>For Employers</h6>
            <ul>
                <li className='py-2 text-sm'>Post a Job</li>
                <li className='py-2 text-sm'>Find Talent</li>
                <li className='py-2 text-sm'>Employer Resources</li>
                <li className='py-2 text-sm'>Pricing Plans</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Help Center</li>
                <li className='py-2 text-sm'>FAQs</li>
                <li className='py-2 text-sm'>Contact Us</li>
                <li className='py-2 text-sm'>Terms & Policies</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer