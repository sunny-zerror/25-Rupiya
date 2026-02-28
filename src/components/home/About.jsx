"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(Flip, ScrollTrigger);

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
            start: "top center",
            end: "bottom center",

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
                <div className="intro-platform-image intro-platform-image-1">
                    <img src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17e_530688aa83656837a578241a25cc9622_intro-image-1.avif" />
                </div>
                <div className="intro-platform-image intro-platform-image-2">
                    <img src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17c_1320acbfc56822d6bc797ce95b2799bc_intro-image-3.avif" />
                </div>
                <div className="intro-platform-image intro-platform-image-3">
                    <img src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17b_485c73ebf44a5f1d16dd40cc8eb8662b_intro-image-2.avif" />
                </div>
                <div className="intro-platform-image intro-platform-image-4">
                    <img src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd17f_1efb09d93198ba12b2a76b9a26147a93_intro-image-4.avif" />
                </div>
            </div>

            <div className=" text-center space-y-10 pb-20">
                <p className="font-thin uppercase pp_neue text-sm">About us</p>
                <p className="text-5xl leading-none">A new<span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#FECC33"></circle> </svg></span>language of <span className="bg-pattern">visual expression.</span> <br />
                    Built<span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27 27L0 54V0L27 27Z" fill="#21935b"></path> <path d="M54 27L27 54V0L54 27Z" fill="#21935b"></path> </svg></span>on the most complete platform for storytelling.</p>
            </div>

            <div className="platform_images_paren w-full center">
                <div className="w-[80%] aspect-1232/756 bg-[#f5f5f5] rounded-4xl">
                    <div className="w-[75%] aspect-917/113 p-5">
                        <img
                            className="w-full"
                            src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd178_intro-header.svg"
                        />
                    </div>

                    <div className="w-full aspect-1850/888 relative">
                        <div className="platform-images w-full absolute inset-0 z-10"></div>
                        <img
                            className="w-full"
                            src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd176_intro-platform.avif"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About