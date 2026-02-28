import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import Hero from '@/components/home/Hero'
import PhysicsFall from '@/components/home/PhysicsFall'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <ClientsMarquee/>
      <About/>
      <PhysicsFall/>
    </>
  )
}

export default HomePage