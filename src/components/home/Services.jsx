import React from 'react'

const SERVICES = [
    {
        id: "01",
        title: "MUSIC VIDEOS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s1.jpg",
        desc: "From concept development to shoot and final delivery, we move at internet speed. High-impact visuals crafted, edited, and posted in days — not dragged out for weeks."
    },
    , {},
    {
        id: "02",
        title: "BRAND FILMS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s2.jpg",
        desc: "We build cinematic campaign worlds that feel premium and culturally sharp. Big-screen energy and storytelling — without the bloated production price tag."
    },
    , {},
    {
        id: "03",
        title: "AI CONTENT SYSTEMS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s3.jpg",
        desc: "Scalable character pipelines, visual styles, and modular creative assets. Designed to generate consistent, high-volume content without reinventing the wheel each time."
    },
    {
        id: "04",
        title: "EDITORIAL & SOCIAL CUTDOWNS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s1.jpg",
        desc: "Platform-native edits tailored for every feed, format, and algorithm. Short-form versions that keep the original vibe while maximizing reach and retention."
    }
];

const Services = () => {
    return (
        <>
            <div className=" padding pt-20! grid grid-cols-3 ">
                <div className="col-span-2">
                    <p className="text-8xl uppercase leading-none  font-semibold ">
                        Our <br /> Services
                    </p>
                </div>
                <div className="h-full flex items-end pr-36">
                    <p className='text-2xl font-medium pt-12 pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-5 gap-y-20 padding">
                {SERVICES.map((service, index) => (
                    <div key={index} className="">
                        <div className="w-full aspect-square">
                            {service.img && (
                                <img className='cover' src={service.img} alt="" />
                            )}
                        </div>
                        <div className=" pt-2">
                            <p className="font-thin uppercase pp_neue mb-2 ">    {service.id}             </p>
                            <p className='uppercase text-3xl mb-2'>
                                {service.title}
                            </p>
                            <p className='leading-tight'>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services