"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const PhysicsFall = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const boxesRef = useRef([]);
    const hasFallen = useRef(false);

    useEffect(() => {
        const { Engine, World, Bodies, Runner, Body } = Matter;

        // Engine
        const engine = Engine.create();
        engine.gravity.y = 0; // gravity OFF initially
        engineRef.current = engine;
        const world = engine.world;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // Invisible ground
        const ground = Bodies.rectangle(
            width / 4,
            height + 90,
            width,
            300,
            { isStatic: true }
        );
        World.add(world, ground);

        // Create boxes
        const domBoxes = document.querySelectorAll(".physics_item");

        domBoxes.forEach((el, i) => {
            const body = Bodies.rectangle(
                width / 2 + i * 90 - 90,
                -100,
                64,
                64,
                {
                    restitution: 0.9,   // bounce
                    friction: 0.1,
                    frictionAir: 0.02, // floaty
                    density: 0.002,
                }
            );

            boxesRef.current.push({ el, body });
            World.add(world, body);
        });

        // Run engine
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Sync DOM with Matter bodies
        const update = () => {
            boxesRef.current.forEach(({ el, body }) => {
                el.style.transform = `
          translate(${body.position.x - 32}px, ${body.position.y - 32}px)
          rotate(${body.angle}rad)
        `;
            });

            // subtle organic motion while falling
            if (engine.gravity.y > 0) {
                boxesRef.current.forEach(({ body }) => {
                    Body.applyForce(body, body.position, {
                        x: (Math.random() - 0.5) * 0.0002,
                        y: 0,
                    });
                });
            }

            requestAnimationFrame(update);
        };
        update();

        return () => {
            Runner.stop(runner);
            World.clear(world);
            Engine.clear(engine);
        };
    }, []);

    useEffect(() => {
        const target = document.querySelector(".physics_free_fall_paren");
        const { Body } = Matter;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    entry.boundingClientRect.top <= window.innerHeight / 2 &&
                    !hasFallen.current
                ) {
                    hasFallen.current = true;

                    engineRef.current.gravity.y = 1;

                    boxesRef.current.forEach(({ body }) => {
                        // random sideways burst
                        Body.applyForce(body, body.position, {
                            x: (Math.random() - 0.5) * 0.05,
                            y: Math.random() * -0.02,
                        });

                        // random spin
                        Body.setAngularVelocity(
                            body,
                            (Math.random() - 0.5) * 0.4
                        );
                    });
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Content Section */}
            <div className="w-full padding relative flex flex-col justify-center h-screen">
                <p className="font-thin uppercase text-sm">About us</p>
                <p className="text-8xl leading-none font-semibold my-20">
                    Find your <br /> influences
                </p>
                <p className="w-[25%] text-xl leading-none">
                    Dive into the most complete visual library out there, curated to help
                    you discover the references that shape your creative direction.
                </p>

            {/* Physics Layer */}
            <div
                ref={sceneRef}
                className="physics_free_fall_paren absolute left-0 "
            >

                <div className="physics_item w-32 aspect-square absolute inset-auto bg-pattern bg-[#21935b]!"></div>
                <div className="physics_item w-20 aspect-square rounded-full absolute inset-auto bg-pattern "></div>
                <div className="physics_item text-3xl block w-fit font-thin bg-black center rounded-full text-white px-6 py-4"><p>5.8k Movies</p></div>
                <div className="physics_item w-32 aspect-square absolute inset-auto bg-pattern bg-[#fecc33]!"></div>
                <div className="physics_item text-3xl block w-fit font-thin bg-black center rounded-full text-white px-6 py-4"><p>540+ Hrs Video</p></div>
                <div className="physics_item text-6xl block w-fit font-thin bg-[#FF8400] center rounded-full text-white px-6 py-4"><p>5M+ Views</p></div>
                <div className="physics_item w-44 aspect-square rounded-full absolute inset-auto bg-pattern "></div>
                <div className="physics_item w-44 aspect-269/234 triangle_shape absolute inset-auto bg-pattern "></div>
                <div className="physics_item text-3xl block w-fit font-thin bg-black center rounded-full text-white px-6 py-4"><p>20+ Projects</p></div>
                <div className="physics_item w-60 absolute inset-auto ">
                    <svg viewBox="0 0 374 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M374 161.947L280.5 323.894H93.5L0 161.947L93.5 0L280.5 7.98702e-06L374 161.947Z" fill="#30a81d"></path>
                    </svg>
                </div>
                <div className="physics_item text-3xl block w-fit font-thin bg-black center rounded-full text-white px-6 py-4"><p>15k+ Ads</p></div>
            </div>

            </div>

            <div className="w-full h-screen"></div>
        </>
    );
};

export default PhysicsFall;