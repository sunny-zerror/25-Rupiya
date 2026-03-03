import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-full padding space-y-20 ">
        <p className='text-5xl font-medium pt-12 leading-none'> <br /> Made for<span className=' ml-1 bg-pattern'>  Designers.</span>  <br />Built for Storytellers.</p>



        <div className=" grid grid-cols-5 gap-x-20">
          <div className=" col-span-2 space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Newsletter</p>
            <div className="  search_btn_paren flex items-center p-2 justify-between  h-14 rounded-full bg-[#DFDFDF] ">
              <div className="flex items-center pl-4 tracking-wider whitespace-nowrap pp_neue uppercase text-sm h-full relative">
                <p className='opacity-70'>Enter Your Email Address</p>
              </div>

              <div className="bg-white h-full px-5 rounded-full center">
                <p className="uppercase tracking-wide text-sm font-thin pp_neue">
                  Submit
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Company</p>

            <div className="">
              <p>Home</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
            </div>

          </div>
          <div className="space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Socials</p>

            <div className="">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Youtube</p>
            </div>

          </div>
        </div>

        <p className="font-thin uppercase pp_neue text-sm">© 25 Rupiya, all rights reserved, 2025</p>

      <div className="w-full text-center">
        <p className='text-[18.8vw] whitespace-nowrap leading-none uppercase font-black'>25 Rupiya</p>
      </div>

      </div>
    </>
  )
}

export default Footer