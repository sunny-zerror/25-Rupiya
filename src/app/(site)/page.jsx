import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import Hero from '@/components/home/Hero'
import KeyProjects from '@/components/home/KeyProjects'
import PhysicsFall from '@/components/home/PhysicsFall'
import Services from '@/components/home/Services'
import StickyProcess from '@/components/home/StickyProcess'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <ClientsMarquee/>
      <About/>
      <PhysicsFall/>
      <StickyProcess/>
      <Services/>
      {/* <KeyProjects/> */}
    </>
  )
}

export default HomePage