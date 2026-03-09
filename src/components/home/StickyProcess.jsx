"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const process = [
    {
        title: "BRIEF",
        img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif",
        desc: "You share the story, references, and deadline. We understand the vision, tone, and platform goals before moving into concept development."
    },
    {
        title: "CONCEPT",
        img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif",
        desc: "We craft moodboards, visual directions, and storyboards while building the AI pipeline that will drive the production process."
    },
    {
        title: "PRODUCE",
        img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif",
        desc: "Shoot, generate, and composite visuals with rapid iterations. A hybrid workflow combining real production and AI to move fast."
    },
    {
        title: "DELIVER",
        img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif",
        desc: "Final cut, platform-ready exports, and reusable assets delivered. Optimized for multiple formats so your content keeps working everywhere."
    }
];

const StickyProcess = () => {
    const imageRef = useRef(null);
    const wrapperRef = useRef(null);
    const [currentImg, setCurrentImg] = useState("https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd156_knight-4.avif");

    useEffect(() => {
        const slides = gsap.utils.toArray(".serv_slide");

        slides.forEach((slide, i) => {
            ScrollTrigger.create({
                trigger: slide,
                start: "top center",
                end: "bottom center",
                onEnter: () => changeImage(i),
                onEnterBack: () => changeImage(i),
            });
        });

        function changeImage(index) {
            const img = imageRef.current;
            if (!img) return;

            const tl = gsap.timeline();

            tl.to(img, {
                filter: "blur(20px)",
                opacity: 0,
                duration: 0.2,
                ease: "power2.out"
            })
                .call(() => {
                    setCurrentImg(process[index].img);
                })
                .to(img, {
                    filter: "blur(0px)",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div ref={wrapperRef} className="w-full h-[calc(100vh+103vw+10rem)] flex">

            {/* LEFT (Sticky) */}
            <div className="w-1/2 sticky top-0 h-screen bg-pattern bg-[#30A81D]! flex items-center justify-center">
                <div className="w-[88%] aspect-square overflow-hidden flex items-center justify-center rounded-full bg-[#141414]">
                    <img
                        ref={imageRef}
                        className="cover"
                        src={currentImg}
                        alt=""
                    />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 px-20 text-white bg-[#141414]">

                <div className="h-screen space-y-10 flex flex-col justify-center">
                    <p className="text-8xl leading-none">
                        HOW WE<br /> WORK
                    </p>
                    <p className="text-xl w-[80%]">
                        From concept to final cut—AI-assisted storytelling that scales.
                        Fast turnarounds, cinematic finish.
                    </p>
                </div>

                {process.map((service, i) => (
                    <div
                        key={i}
                        className="serv_slide h-[25vw] flex flex-col justify-center  space-y-5 "
                    >
                        <p className="font-thin uppercase pp_neue text-sm">Step {i + 1}</p>
                        <p className="text-5xl leading-none">
                            {service.title}
                        </p>
                        <p className="text-xl font-thin leading-tight ">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickyProcess;