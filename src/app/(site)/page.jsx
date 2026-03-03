import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import Hero from '@/components/home/Hero'
import KeyProjects from '@/components/home/KeyProjects'
import PhysicsFall from '@/components/home/PhysicsFall'
import StickyServices from '@/components/home/StickyServices'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <ClientsMarquee/>
      <About/>
      <PhysicsFall/>
      <StickyServices/>
      <KeyProjects/>
    </>
  )
}

export default HomePage