import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import FeaturedWork from '@/components/home/FeaturedWork'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Showreel from '@/components/home/Showreel'
import CircularMarquee from '@/components/home/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <ClientsMarquee/>
      <Showreel/>
      <FeaturedWork/>
      <Services/>
      <CircularMarquee/>
    </>
  )
}

export default HomePage