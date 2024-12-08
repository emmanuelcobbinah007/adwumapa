import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='mt-[80px] md:flex md:justify-center max-w-[1200px] mx-auto md:py-12 py-6 bg-[#f9f9fb] '>
        <Card title='For Artisans' tagline='Showcase Your Skills, Unlock New Opportunities' buttonText='Browse Jobs' bgColour='#a4f0c2'/>
        <Card title='For Employers' tagline='Find the Perfect Match for Your Business' buttonText='Post Job' bgColour='#f4f4f9'/>
    </div>
  )
}

export default Cards