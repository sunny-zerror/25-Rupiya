"use client";
import { RiMenuLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import React, { useState } from 'react'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className="w-full center fixed z-1000 top-0 p-5">
        <div className={` bg-[#DFDFDF] px-8 transition-all duration-300 ${openMenu ? "w-[45vw] rounded-2xl" : "w-[30vw] rounded-2xl"} `}>
          <div onClick={() => setOpenMenu(!openMenu)} className=" cursor-pointer rounded-full h-14 flex items-center justify-between">
            <p className='pp_neue uppercase text-sm font-thin'>Logo</p>
            <RiMenuLine size={16} />
          </div>
          <div className={` shrink-0 overflow-hidden transition-all duration-300  ${openMenu ? "space-y-5 max-h-[35vh] opacity-100" : "space-y-0 max-h-0 opacity-0"}  `}>
            <div className="flex items-center justify-between">
              <div className="text-2xl flex flex-col gap-y-5">
                <Link onClick={()=>setOpenMenu(false)} href='/' className='cursor-pointer hover:pl-2 transition-all duration-300 hover:underline'>Home</Link>
                <p>About</p>
                <Link onClick={()=>setOpenMenu(false)} href='/work' className='cursor-pointer hover:pl-2 transition-all duration-300 hover:underline'>Work</Link>
                <p>Contact</p>
              </div>

              <div className="w-1/2 aspect-video">
                <video loop autoPlay muted playsInline className='cover' src="https://stream.mux.com/2b02N5Y501hFejR2Yas02RZAb8sMOLsWqzE68RX7T8hp3s.m3u8?rendition_order=desc"></video>
              </div>
            </div>
            <div className="w-full flex text-sm opacity-60 pb-5 justify-between">
              <p>The helpful Ai production Company</p>
              <p>Beta Application</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header