"use client";
import { useGSAP } from "@gsap/react";
import { RiCloseLine, RiExpandUpDownFill } from "@remixicon/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(Flip, ScrollTrigger);

const categories = [
    "All",
    "Ai video",
    "Ai movie",
    "video editing",
    "video production",
    "music videos"
]

const works = [
    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17e_530688aa83656837a578241a25cc9622_intro-image-1.avif" },
    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17c_1320acbfc56822d6bc797ce95b2799bc_intro-image-3.avif" },
    { category: "video editing", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17b_485c73ebf44a5f1d16dd40cc8eb8662b_intro-image-2.avif" },
    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17f_1efb09d93198ba12b2a76b9a26147a93_intro-image-4.avif" },

    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif", colStart: 6, rowStart: 1 },
    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif", colStart: 6, rowStart: 2 },
    { category: "video editing", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif", colStart: 7, rowStart: 1 },
    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif", colStart: 7, rowStart: 2 },

    { category: "Ai movie", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd116_knight-10.avif", colStart: 1, rowStart: 3 },
    { category: "music videos", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd112_knight-5.avif", colStart: 1, rowStart: 4 },

    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15c_knight-7.avif", colStart: 2, rowStart: 3, colSpan: 2, rowSpan: 2 },

    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd117_knight-9.avif", colStart: 4, rowStart: 3 },
    { category: "video editing", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd114_knight-2.avif", colStart: 4, rowStart: 4 },
    { category: "Ai movie", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd156_knight-4.avif", colStart: 5, rowStart: 3 },
    { category: "music videos", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15d_water-1.avif", colStart: 5, rowStart: 4 },

    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd159_water-8.avif", colStart: 6, rowStart: 3, colSpan: 2, rowSpan: 2 },

    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15e_water-6.avif", colStart: 1, rowStart: 5, colSpan: 2, rowSpan: 2 },

    { category: "Ai movie", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd115_water-3.avif", colStart: 3, rowStart: 5 },
    { category: "video editing", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd158_water-10.avif", colStart: 3, rowStart: 6 },

    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11b_water-5.avif", colStart: 4, rowStart: 5, colSpan: 2, rowSpan: 2 },

    { category: "video editing", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11c_water-7.avif", colStart: 6, rowStart: 5 },
    { category: "Ai movie", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11a_water-9.avif", colStart: 6, rowStart: 6 },
    { category: "music videos", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd118_water-2.avif", colStart: 7, rowStart: 5 },
    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd119_water-4.avif", colStart: 7, rowStart: 6 }
];

const FeaturedWork = () => {
    const originalParent = useRef(null);
    const activeEl = useRef(null);
    const [activeWork, setActiveWork] = useState(null);
    const modalRef = useRef(null);
    const container = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredWorks = works.filter(el => el.category === selectedCategory || selectedCategory === "All")

    useGSAP(() => {
        const source = container.current.querySelector(".intro-platform-images");
        const target = container.current.querySelector(".platform-images");

        const images = Array.from(
            container.current.querySelectorAll(".intro-platform-image")
        );

        ScrollTrigger.create({
            trigger: container.current.querySelector(".platform_images_paren"),
            start: "top 70%",

            onEnter: () => {
                images.forEach(el => el.getBoundingClientRect());

                const state = Flip.getState(images);

                images.forEach(el => target.appendChild(el));

                Flip.from(state, {
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.08,
                    borderRadius: 0,
                    absolute: true,
                    simple: true,
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

    const openWork = (e, item) => {
        const el = e.currentTarget;

        activeEl.current = el;
        originalParent.current = el.parentNode;

        const state = Flip.getState(el);

        modalRef.current.appendChild(el);

        Flip.from(state, {
            duration: 0.8,
            ease: "power3.inOut",
            absolute: true
        });

        setActiveWork(item);
    };

    const closeWork = () => {
        const el = activeEl.current;

        const state = Flip.getState(el);

        originalParent.current.appendChild(el);

        Flip.from(state, {
            duration: 0.8,
            ease: "power3.inOut",
            absolute: true
        });

        setActiveWork(null);
    };

    return (
        <div ref={container}>

            <div
                ref={modalRef}
                className={` preview_fix fixed top-0 left-0 w-full h-screen center 
 transition-all duration-500 z-[9999]
 ${activeWork ? "opacity-100 backdrop-blur-md pointer-events-auto" : "opacity-0 pointer-events-none"}
 `}
            >

                {activeWork && (
                    <>
                        <button
                            onClick={closeWork}
                            className="absolute z-10 top-5 right-5 bg-[#E9E9E9] px-4 py-2 rounded-lg hover:bg-[#141414] hover:text-white transition-all"
                        >
                            X
                        </button>
                        {/* <div className="w-[80%] aspect-video">
                            <video
                                src={activeWork.video}
                                autoPlay
                                loop
                                muted
                                className="cover"
                            />
                        </div> */}
                    </>
                )}

            </div>

            <div className="intro-platform-images relative w-full h-[30vh] my-20">
                {works.slice(0, 4).map((item, i) => (
                    <div onClick={(e) => openWork(e, item)} key={i} className={`intro-platform-image group intro-platform-image-${i + 1} ${selectedCategory === "All" || selectedCategory === item.category ? "opacity-100 grayscale-0 blur-none pointer-events-auto" : "opacity-30 blur-[1px] grayscale-100 pointer-events-none"}  transition-[opacity,filter] duration-300`}>
                        <img className="group-hover:scale-[.9] transition-all duration-300 cursor-pointer" src={item.img} />
                    </div>
                ))}
            </div>

            <div className="platform_images_paren w-full center">
                <div className="w-[80%]  bg-[#f5f5f5] rounded-2xl overflow-hidden ">
                    <div className="p-5">
                        
                        <div className="w-full group flex gap-x-3">
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F85656]">
                                <RiCloseLine className=" group-hover:opacity-100 opacity-0 transition-all duration-150   " />
                            </div>
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F9BC4A]">
                                <span className=" group-hover:opacity-100 opacity-0 transition-all duration-150   -translate-y-[0.05rem] translate-x-[0.025rem]">-</span>
                            </div>
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#39C951]">
                                <RiExpandUpDownFill className=" group-hover:opacity-100 opacity-0 transition-all duration-150   rotate-45" />
                            </div>

                        </div>
                        <div className="flex w-full py-6  gap-x-10">
                            <p className="font-thin uppercase flex items-center gap-x-4 text-xl leading-none">Our Works</p>
                            {/* <div className=" border-b pb-1 border-black/30 flex items-center justify-between w-[20vw]">
                                <p className="opacity-90 text-sm leading-none">Explore More Work</p>
                                <div className="bg-[#E9E9E9]  px-3 py-1.5  rounded-full center">
                                    <p className="uppercase tracking-wide leading-none translate-y-[.5px]  text-[.5rem] font-thin pp_neue">
                                        ⌘/
                                    </p>
                                </div>
                            </div> */}
                            <div className=" flex  flex-wrap  gap-x-2">
                                {categories.map((item, i) => (
                                    <div onClick={() => setSelectedCategory(item)} key={i} className={`px-3 py-1  pp_neue text-xs rounded-full  ${selectedCategory === item ? "bg-[#141414] text-white" : "bg-[#E9E9E9]"} transition-all duration-300  `}>
                                        <button className="capitalize">{item}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="uppercase text-xs pp_neue leading-none">Showing {filteredWorks.length} of  {works.length} works</p>
                    </div>

                    <div className="w-full grid  grid-cols-7 ">
                        <div className="platform-images w-full grid grid-cols-5 grid-rows-2 row-span-2 col-span-5"></div>
                        {works.slice(4).map((item, i) => (
                            <div
                                key={i}
                                onClick={(e) => openWork(e, item)}
                                className={` work w-full aspect-video group cursor-pointer overflow-hidden ${selectedCategory === "All" || selectedCategory === item.category ? "opacity-100 grayscale-0 blur-none pointer-events-auto" : "opacity-30 blur-[1px] grayscale-100 pointer-events-none"}  transition-[opacity,filter] duration-300  `}
                                style={{
                                    gridColumn: `${item.colStart} / span ${item.colSpan || 1}`,
                                    gridRow: `${item.rowStart} / span ${item.rowSpan || 1}`,
                                }}
                            >
                                <img src={item.img} className="w-full h-full object-cover group-hover:scale-[0.9] cursor-pointer transition-transform duration-300 " />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedWork