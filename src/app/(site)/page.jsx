import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import FeaturedWork from '@/components/home/FeaturedWork'
import Hero from '@/components/home/Hero'
import KeyProjects from '@/components/home/KeyProjects'
import PhysicsFall from '@/components/home/PhysicsFall'
import Services from '@/components/home/Services'
import StickyProcess from '@/components/home/StickyProcess'
import CircularMarquee from '@/components/home/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <ClientsMarquee/>
      <Services/>
      <PhysicsFall/>
      <StickyProcess/>
      <FeaturedWork/>
      <CircularMarquee/>
    </>
  )
}

export default HomePage