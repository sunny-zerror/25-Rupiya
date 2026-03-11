"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

const TestimonialsData = [
    {
        id: 1,
        name: "Victoria Harinxma-Jenkins ",
        post: "Marketing & Communications at Clear Street",
        desc: "Büro exceeded all expectations, effortlessly translating our vision into a stunning and user-friendly website that perfectly captures our brand's essence. The team tackled every obstacle we presented them with resourcefulness and determination. Their unparalleled creativity, expertise, and attention to detail made the entire process seamless, resulting in a product we couldn’t be more proud of!",
        image: "https://www.burocratik.com/_nuxt/image/9c903c.svg"
    },
    {
        id: 2,
        name: "Madalina Covachiu",
        post: "Unilever Global Brand Manager",
        desc: "I needed a creative agency at the top of design thinking and leading-edge in technical capabilities. Bürocratik was a perfect match, they are a very rare kind of agency, one that treats clients with respect while bringing their best thinking and work to meet business needs. Outstanding creative digital work!",
        image: "https://www.burocratik.com/_nuxt/image/2001d1.svg"
    },
    {
        id: 3,
        name: "Khalid Meniri",
        post: "Co-Founder & CEO, Selfbook",
        desc: "It has been an absolute joy to work with Adriano and the team at Büro. We could not be happier with the results as well as how easy everyone at Büro has been to collaborate with – they feel like an extension of our own team!",
        image: "https://www.burocratik.com/_nuxt/image/198841.svg"
    },
    {
        id: 4,
        name: "Patrícia Sousa",
        post: "Brand Manager Sogevinus",
        desc: "Working with Büro meant to choose the hardest path: to create outside existing references assuming a different work methodology and often questioning our requests. Büro truly led us to astounding websites and we can't recommend them enough.",
        image: "https://www.burocratik.com/_nuxt/image/48ff05.svg"
    },
    {
        id: 5,
        name: "Mohammed Ali",
        post: "Ziqqi Founder & CEO",
        desc: "Bürocratik made creating our Brand as stress free as possible. From day one, they used collaboration tools to involve us in every step of the process. Even better, Büro brought a level of transparency to our relationship that made working with them fun and productive. Every step of the way, they clarified what we had to do and what they were doing.",
        image: "https://www.burocratik.com/_nuxt/image/1a1ae3.svg"
    },
]

const Testimonials = () => {
    return (
        <>
            <div className="padding mt-14 w-full">
                <div className=" w-full grid grid-cols-3">
                    <div className="col-span-2">
                        <p className="text-8xl uppercase leading-none  font-semibold ">
                            Testimonials
                        </p>
                    </div>
                    <div className="h-full flex items-end pr-36">
                        <p className='text-2xl font-medium pt-12 pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={200}
                    className="mySwiper   relative cursor-grab active:cursor-grabbing mt-20">

                    {TestimonialsData.map((item, i) => (
                        <SwiperSlide key={i} className='w-[90vw]! md:w-[40vw]!'>
                            <div className="">
                                <img src={item.image} alt="" />
                            </div>
                            <p className='text-3xl'>{item.desc}</p>
                            <div className=" pt-8">
                                <p className='text-xl'>{item.name}</p>
                                <p className='text-xl opacity-50 '>{item.post}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </>
    )
}

export default Testimonials