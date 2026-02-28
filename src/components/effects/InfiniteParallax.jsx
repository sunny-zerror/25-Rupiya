"use client";

import { useEffect, useRef, useState } from "react";

export default function InfiniteParallax({
  children,
  draggable = true,
  className = "",
  ariaLabel = "Vertical draggable marquee",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isTouchRef = useRef(false);

  const [contentHeight, setContentHeight] = useState(0);

  const position = useRef(0);
  const velocity = useRef(0);

  const isDragging = useRef(false);
  const lastY = useRef(0);

  /* Measure height */
  useEffect(() => {
    if (!trackRef.current) return;

    const observer = new ResizeObserver(() => {
      setContentHeight(trackRef.current.scrollHeight / 2);
    });

    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  /* Animation loop (ONLY inertia, no auto scroll) */
  useEffect(() => {
    if (!contentHeight) return;

    let raf;

    const animate = () => {
      if (!isDragging.current) {
        position.current += velocity.current;
        velocity.current *= isTouchRef.current ? 0.92 : 0.95;
      }

      // infinite loop bounds
      if (position.current <= -contentHeight) {
        position.current += contentHeight;
      } else if (position.current >= 0) {
        position.current -= contentHeight;
      }

      trackRef.current.style.transform = `translateY(${position.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [contentHeight]);

  /* Drag logic */
  useEffect(() => {
    if (!draggable || !containerRef.current) return;

    const el = containerRef.current;

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;

      isDragging.current = true;
      lastY.current = e.clientY;

      isTouchRef.current = e.pointerType === "touch";

      el.setPointerCapture(e.pointerId);

      el.classList.remove("cursor-grab");
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;

      const delta = e.clientY - lastY.current;

      const multiplier = isTouchRef.current ? 2.5 : 0.6;
      velocity.current = delta * multiplier;

      position.current += delta;

      lastY.current = e.clientY;
    };

    const stopDrag = (e) => {
      isDragging.current = false;

      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}

      el.classList.remove("cursor-grabbing");
      el.classList.add("cursor-grab");
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", stopDrag);
    el.addEventListener("pointercancel", stopDrag);
    el.addEventListener("pointerleave", stopDrag);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", stopDrag);
      el.removeEventListener("pointercancel", stopDrag);
      el.removeEventListener("pointerleave", stopDrag);
    };
  }, [draggable]);

  return (
    <div
      ref={containerRef}
      role="marquee"
      aria-live="off"
      aria-label={ariaLabel}
      className={`h-full overflow-y-clip marquee-no-select ${
        draggable ? "cursor-grab" : ""
      } ${className}`}
    >
      <div
        ref={trackRef}
        className="flex flex-col select-none will-change-transform"
      >
        {children}
        {children}
      </div>
    </div>
  );
}