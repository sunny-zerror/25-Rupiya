"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHAPES = [
    { type: "square", size: 128, color: "#21935b", x: -0.4, y: 0.7 },
    { type: "circle", size: 80, x: -0.35, y: 0.75 },
    { type: "pill", text: "5.8k Movies", size: 28, x: -0.25, y: 0.85 },
    { type: "square", size: 128, color: "#fecc33", x: -0.15, y: 0.7 },
    { type: "pill", text: "540+ Hrs Video", size: 28, x: -0.05, y: 0.85 },
    { type: "pill", text: "5M+ Views", size: 48, x: 0.05, y: 0.7 },
    { type: "circle", size: 176, x: 0.15, y: 0.75 },
    { type: "triangle", size: 140, color: "#bdbdbd", x: 0.25, y: 0.7 },
    { type: "pill", text: "20+ Projects", size: 28, x: 0.35, y: 0.85 },
    { type: "hexagon", size: 240, color: "#30a81d", x: 0.45, y: 0.7 },
    { type: "pill", text: "15k+ Ads", size: 28, x: 0.55, y: 0.85 },
];

export default function PhysicsSection() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const bodiesRef = useRef([]);
    const engineRef = useRef(null);
    const runnerRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const config = {
            gravity: { x: 0, y: 1 },
            restitution: 0.5,
            friction: 0.15,
            frictionAir: 0.02,
            density: 0.002,
            wallThickness: 200,
            mouseStiffness: 0.6,
        };

        const clamp = (val, min, max) =>
            Math.max(min, Math.min(max, val));

        const {
            Engine,
            World,
            Bodies,
            Runner,
            Mouse,
            MouseConstraint,
        } = Matter;

        // 🔹 Create engine ONCE
        const engine = Engine.create();
        engine.gravity = config.gravity;
        engineRef.current = engine;

        const containerRect = container.getBoundingClientRect();
        const wallThickness = config.wallThickness;

        const walls = [
            Bodies.rectangle(
                containerRect.width / 2,
                containerRect.height + wallThickness / 2,
                containerRect.width + wallThickness * 2,
                wallThickness,
                { isStatic: true }
            ),
            Bodies.rectangle(
                -wallThickness / 2,
                containerRect.height / 2,
                wallThickness,
                containerRect.height + wallThickness * 2,
                { isStatic: true }
            ),
            Bodies.rectangle(
                containerRect.width + wallThickness / 2,
                containerRect.height / 2,
                wallThickness,
                containerRect.height + wallThickness * 2,
                { isStatic: true }
            ),
        ];

        World.add(engine.world, walls);

        const objects = container.querySelectorAll(".object");

        objects.forEach((obj, index) => {
            const rect = obj.getBoundingClientRect();

            const startX =
                Math.random() * (containerRect.width - rect.width) +
                rect.width / 2;

            const startY = -200;

            const body = Bodies.rectangle(
                startX,
                startY,
                rect.width,
                rect.height,
                {
                    frictionAir: config.frictionAir,
                    friction: config.friction,
                    density: config.density,
                    restitution: config.restitution,
                }
            );

            bodiesRef.current.push({
                body,
                element: obj,
                width: rect.width,
                height: rect.height,
            });

            World.add(engine.world, body);
        });

        const mouse = Mouse.create(container);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: config.mouseStiffness },
        });

        World.add(engine.world, mouseConstraint);

        // 🔹 Runner created but NOT started
        const runner = Runner.create();
        runnerRef.current = runner;

        // 🔹 DOM Sync
        const update = () => {
            bodiesRef.current.forEach(
                ({ body, element, width, height }) => {
                    const x = clamp(
                        body.position.x - width / 2,
                        0,
                        containerRect.width - width
                    );

                    const y = clamp(
                        body.position.y - height / 2,
                        -height * 3,
                        containerRect.height - height
                    );

                    element.style.left = `${x}px`;
                    element.style.top = `${y}px`;
                    element.style.transform = `rotate(${body.angle}rad)`;
                }
            );

            animationFrameRef.current =
                requestAnimationFrame(update);
        };

        update();

        // 🎯 ScrollTrigger with toggleActions
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom top",
            // markers: true,
            onEnter: () => Runner.run(runner, engine),
            onLeave: () => Runner.stop(runner),
            onEnterBack: () => Runner.run(runner, engine),
            onLeaveBack: () => Runner.stop(runner),
        });

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            Runner.stop(runner);
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, []);

    return (
        <>
            <div ref={sectionRef} className=" physics_fall padding relative w-full h-screen  flex flex-col justify-center  overflow-hidden">
                <p className="font-thin uppercase pp_neue text-sm">About us</p>
                <p className="text-8xl leading-none font-semibold my-20">
                    Find your <br /> influences
                </p>
                <p className="w-[25%] text-xl leading-none">
                    Dive into the most complete visual library out there.
                </p>
                <div
                    ref={containerRef}
                    className="absolute flex  right-0 w-full h-full"
                >
                    {SHAPES.map((s, i) => (
                        <div key={i} className=" object physics_inner  absolute w-max select-none cursor-grab active:cursor-grabbing">
                            <Shape shape={s} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function Shape({ shape }) {
    const base = "physics_item flex items-center justify-center";
    if (shape.type === "pill") {
        return (
            <div
                className={`${base} rounded-full w-fit whitespace-nowrap bg-black text-white font-thin`}
                style={{ padding: "1rem 2rem", fontSize: shape.size || 24 }}
            >
                {shape.text}
            </div>
        );
    }

    if (shape.type === "circle") {
        return (
            <div
                className={`${base} bg-pattern rounded-full`}
                style={{
                    width: shape.size,
                    height: shape.size,
                    background: shape.color || "",
                }}
            />
        );
    }

    if (shape.type === "square") {
        return (
            <div
                className={`${base} bg-pattern`}
                style={{
                    width: shape.size,
                    height: shape.size,
                    background: shape.color || "",
                }}
            />
        );
    }

    if (shape.type === "triangle") {
        return (
            <div
                className={`${base} h-0  w-0`}
                style={{
                    borderLeft: `${shape.size / 2}px solid transparent`,
                    borderRight: `${shape.size / 2}px solid transparent`,
                    borderBottom: `${shape.size}px solid ${shape.color || ""}`,
                }}
            />
        );
    }

    if (shape.type === "hexagon") {
        return (
            <svg
                viewBox="0 0 374 324"
                className={`${base}`}
                style={{ width: shape.size }}
            >
                <path
                    d="M374 161.947L280.5 323.894H93.5L0 161.947L93.5 0L280.5 0L374 161.947Z"
                    fill={shape.color || "#30a81d"}
                />
            </svg>
        );
    }

    return null;
}