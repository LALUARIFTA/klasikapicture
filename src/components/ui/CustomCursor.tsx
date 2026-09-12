"use client";

import React, { useState, useEffect } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch desktop screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest(".cursor-pointer") ||
          target.tagName === "INPUT" ||
          target.tagName === "SELECT" ||
          target.tagName === "TEXTAREA")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-red-500 pointer-events-none z-[9999] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      {/* Outer halo glow circle */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-red-500/50 pointer-events-none z-[9998] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-12 h-12 bg-red-500/15 scale-110 border-red-400"
            : "w-7 h-7 bg-transparent scale-100"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
