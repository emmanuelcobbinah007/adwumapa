import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, tagline, buttonText, bgColour}) => {

  const [buttonTrigger, setButtonTrigger] = useState(false);

  useEffect(() => {
    if (buttonText == 'Browse Jobs') {
      setButtonTrigger(true);
    }
  }, [])

  return (
    <div className={`my-5 mx-5 px-6 py-4 rounded-md w-[40%] bg-[${bgColour}] shadow-lg`}>
            <h1 className='bg-inherit font-bold py-2 text-lg'>{title}</h1>
            <p className='bg-inherit text-md py-1'>{tagline}</p>

            {buttonTrigger ? <Link to="/all_jobs"><button className={`py-1 px-3 my-3 mb-3 bg-[#2d2d2d] text-md rounded-md text-white hover:scale-105 transition-all duration-300 shadow-md hover:font-semibold`}>{buttonText}</button></Link> : <Link to="/add_job"><button className={`py-1 px-3 my-3 mb-3 bg-[#2ecc71] text-md rounded-md text-white hover:scale-105 transition-all duration-300 shadow-md hover:font-semibold`}>{buttonText}</button></Link>}

        </div>
  )
}

export default Card