import React from 'react'

const Teams = [
  {
    id: 1,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {},
  {
    id: 2,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 3,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {},
  {
    id: 4,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {},
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {},
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },

]

const OurTeam = () => {
  return (
    <>
      <div className="padding grid grid-cols-3 w-full">
        <div className="col-span-2">
          <p className="text-8xl uppercase leading-none  font-semibold ">
            Our<br />Team
          </p>
        </div>
        <div className="h-full flex items-end pr-36">
          <p className='text-2xl font-medium pt-12 pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
        </div>
      </div>

      <div className=" padding w-full grid grid-cols-4 gap-5">
        {Teams.map((team, i) => (
          <div key={i} className="aspect-3/4 w-full relative">
            <div className=" relative z-10 h-full flex flex-col justify-between p-6 text-white">
            <p className='text-3xl'>{team.name}</p>
            <p className='text-xl'>{team.post}</p>
            </div>
            {team.img && (
              <img src={team.img} alt="" className='absolute top-0 left-0 cover' />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default OurTeam