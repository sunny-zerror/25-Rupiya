"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: "MUSIC VIDEOS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s1.jpg",
        desc: "From concept development to shoot and final delivery, we move at internet speed. High-impact visuals crafted, edited, and posted in days — not dragged out for weeks."
    },
    {
        title: "BRAND FILMS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s2.jpg",
        desc: "We build cinematic campaign worlds that feel premium and culturally sharp. Big-screen energy and storytelling — without the bloated production price tag."
    },
    {
        title: "AI CONTENT SYSTEMS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s3.jpg",
        desc: "Scalable character pipelines, visual styles, and modular creative assets. Designed to generate consistent, high-volume content without reinventing the wheel each time."
    },
    {
        title: "EDITORIAL & SOCIAL CUTDOWNS",
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/services_s1.jpg",
        desc: "Platform-native edits tailored for every feed, format, and algorithm. Short-form versions that keep the original vibe while maximizing reach and retention."
    }
];

const StickyServices = () => {
    const imageRef = useRef(null);
    const wrapperRef = useRef(null);
    const [currentImg, setCurrentImg] = useState(SERVICES[0].img);

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
                    setCurrentImg(SERVICES[index].img);
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
                <div className="w-[88%] aspect-square flex items-center justify-center rounded-full bg-[#141414]">
                    <div className="w-[50%] rounded-lg relative overflow-hidden aspect-4/3">
                        <img
                            ref={imageRef}
                            className="w-full h-full object-cover"
                            src={currentImg}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 px-20 text-white bg-[#141414]">

                <div className="h-screen space-y-10 flex flex-col justify-center">
                    <p className="text-8xl leading-none">
                        WHAT WE<br /> BUILD
                    </p>
                    <p className="text-xl w-[80%]">
                        From concept to final cut—AI-assisted storytelling that scales.
                        Fast turnarounds, cinematic finish.
                    </p>
                </div>

                {SERVICES.map((service, i) => (
                    <div
                        key={i}
                        className="serv_slide h-[25vw] flex flex-col justify-center"
                    >
                        <p className="text-5xl leading-none">
                            {i + 1}. {service.title}
                        </p>
                        <p className="text-xl font-thin leading-tight mt-5">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickyServices;