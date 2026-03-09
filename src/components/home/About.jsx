"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(Flip, ScrollTrigger);

const categories = [
    "Ai video",
    "Ai movie",
    "video editing",
    "video production",
    "music videos"
]

const gridItems = [
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif", colStart: 6, rowStart: 1 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif", colStart: 6, rowStart: 2 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif", colStart: 7, rowStart: 1 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif", colStart: 7, rowStart: 2 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd116_knight-10.avif", colStart: 1, rowStart: 3 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd112_knight-5.avif", colStart: 1, rowStart: 4 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15c_knight-7.avif", colStart: 2, rowStart: 3, colSpan: 2, rowSpan: 2 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd117_knight-9.avif", colStart: 4, rowStart: 3 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd114_knight-2.avif", colStart: 4, rowStart: 4 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd156_knight-4.avif", colStart: 5, rowStart: 3 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15d_water-1.avif", colStart: 5, rowStart: 4 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd159_water-8.avif", colStart: 6, rowStart: 3, colSpan: 2, rowSpan: 2 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15e_water-6.avif", colStart: 1, rowStart: 5, colSpan: 2, rowSpan: 2 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd115_water-3.avif", colStart: 3, rowStart: 5 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd158_water-10.avif", colStart: 3, rowStart: 6 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11b_water-5.avif", colStart: 4, rowStart: 5, colSpan: 2, rowSpan: 2 },

    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11c_water-7.avif", colStart: 6, rowStart: 5 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11a_water-9.avif", colStart: 6, rowStart: 6 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd118_water-2.avif", colStart: 7, rowStart: 5 },
    { img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd119_water-4.avif", colStart: 7, rowStart: 6 }
];

const About = () => {
    const container = useRef(null);

    useGSAP(() => {
        const source = container.current.querySelector(".intro-platform-images");
        const target = container.current.querySelector(".platform-images");

        // IMPORTANT: scoped selection
        const images = Array.from(
            container.current.querySelectorAll(".intro-platform-image")
        );

        ScrollTrigger.create({
            trigger: container.current.querySelector(".platform_images_paren"),
            start: "top 70%",

            onEnter: () => {
                // force layout calculation
                images.forEach(el => el.getBoundingClientRect());

                const state = Flip.getState(images);

                images.forEach(el => target.appendChild(el));

                Flip.from(state, {
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.08,
                    borderRadius: 0,
                    absolute: true,
                    simple: true,   // ⭐ critical
                });
            },

            onLeaveBack: () => {
                images.forEach(el => el.getBoundingClientRect());

                const state = Flip.getState(images);

                images.forEach(el => source.appendChild(el));

                Flip.from(state, {
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.08,
                    borderRadius: "1rem",
                    absolute: true,
                    simple: true,
                });
            },
        });
    }, { scope: container });

    return (
        <div ref={container}>
            <div className="intro-platform-images relative w-full h-[30vh] my-20">
                <div className="intro-platform-image group intro-platform-image-1">
                    <img className="group-hover:scale-[.9] transition-all duration-300 cursor-pointer" src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17e_530688aa83656837a578241a25cc9622_intro-image-1.avif" />
                </div>
                <div className="intro-platform-image group intro-platform-image-2">
                    <img className="group-hover:scale-[.9] transition-all duration-300 cursor-pointer" src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17c_1320acbfc56822d6bc797ce95b2799bc_intro-image-3.avif" />
                </div>
                <div className="intro-platform-image group intro-platform-image-3">
                    <img className="group-hover:scale-[.9] transition-all duration-300 cursor-pointer" src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17b_485c73ebf44a5f1d16dd40cc8eb8662b_intro-image-2.avif" />
                </div>
                <div className="intro-platform-image group intro-platform-image-4">
                    <img className="group-hover:scale-[.9] transition-all duration-300 cursor-pointer" src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17f_1efb09d93198ba12b2a76b9a26147a93_intro-image-4.avif" />
                </div>
            </div>

            <div className=" text-center space-y-10 pb-20">
                <p className="font-thin uppercase pp_neue text-sm">About us</p>
                <p className="text-4xl ">25 Rupiya<span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#FECC33"></circle> </svg></span>Productions is a <span className="bg-pattern"> small team      of</span> <br />
                    directors,  <span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27 27L0 54V0L27 27Z" fill="#21935b"></path> <path d="M54 27L27 54V0L54 27Z" fill="#21935b"></path> </svg></span>editors, and AI tinkerers.   Founded in 2023, <br />we blend Bollywood-style visuals with modern AI <span className="bg-pattern inline-flex p-2">✨</span> creativity <br /> to <span className="bg-pattern"> create</span> powerful content <span className="bg-pattern inline-flex  p-2">🎬</span> without massive budgets.</p>
            </div>

            <div className="platform_images_paren w-full center">
                <div className="w-[80%]  bg-[#f5f5f5] rounded-2xl overflow-hidden ">
                    <div className="p-10 pb-5">
                        <p className="font-thin uppercase flex items-center gap-x-4 text-2xl">
                            <span className="size-3 rounded-full bg-[#D9D9D9]"></span>
                            Featured Work</p>
                        <div className=" flex  flex-wrap py-5 gap-x-2">
                            {categories.map((item, i) => (
                                <div key={i} className=" px-3 py-1 bg-[#E9E9E9] pp_neue capitalize text-xs rounded-full">
                                    <button>{item}</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full grid  grid-cols-7 ">
                        <div className="platform-images w-full grid grid-cols-5 grid-rows-2 row-span-2 col-span-5"></div>
                        {gridItems.map((item, i) => (
                            <div
                                key={i}
                                className={`w-full aspect-video group overflow-hidden
      col-start-${item.colStart} 
      row-start-${item.rowStart} 
      ${item.colSpan ? `col-span-${item.colSpan}` : ""} 
      ${item.rowSpan ? `row-span-${item.rowSpan}` : ""}`}
                            >
                                <img src={item.img} className="w-full h-full object-cover group-hover:scale-[0.9] cursor-pointer transition-all duration-300 " />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About