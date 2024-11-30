import React from 'react'

const Card = ({title, tagline, buttonText, bgColour, btnColour}) => {
  return (
    <div className={`my-5 mx-5 px-6 py-4 rounded-md w-[40%] bg-[${bgColour}] shadow-lg`}>
            <h1 className='bg-inherit font-bold py-2 text-lg'>{title}</h1>
            <p className='bg-inherit text-md py-1'>{tagline}</p>
            <button className={`py-1 px-3 my-3 mb-3 bg-[${btnColour}] text-md rounded-md text-white hover:scale-105 transition-all duration-300 shadow-md hover:font-semibold`}>{buttonText}</button>
        </div>
  )
}

export default Card