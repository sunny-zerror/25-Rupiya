import React from 'react'
import PhysicsFall from '@/components/about/PhysicsFall';
import StickyProcess from '@/components/about/StickyProcess';
import OurTeam from '@/components/about/OurTeam';
import DemoSection from '@/components/about/DemoSection';

const page = () => {
    return (
        <>
            <DemoSection/>
            <PhysicsFall />
            <StickyProcess />
            <OurTeam/>
        </>
    )
}

export default page