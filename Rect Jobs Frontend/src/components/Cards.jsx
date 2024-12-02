import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='mt-[80px] flex justify-center mx-auto py-12 bg-[#f9f9fb]'>
        <Card title='For Artisans' tagline='Showcase Your Skills, Unlock New Opportunities' buttonText='Browse Jobs' bgColour='#a4f0c2'/>
        <Card title='For Employers' tagline='Find the Perfect Match for Your Business' buttonText='Post Jobs' bgColour='#f4f4f9'/>
    </div>
  )
}

export default Cards