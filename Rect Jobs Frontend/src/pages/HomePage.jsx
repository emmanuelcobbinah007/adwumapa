import React from 'react'
import '../App.css'
import Header from '../components/header'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Jobs from '../components/Jobs'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Cards />
    <Jobs />
    </>
  )
}

export default HomePage