"use client";
import React, { useRef, useState } from "react";

interface ZoomOnHoverProps {
  src: string;
  alt: string;
}

export default function ZoomOnHover({ src, alt }: ZoomOnHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden border rounded-lg shadow bg-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-200 ease-in-out"
        style={{
          transform: isHovering ? "scale(2)" : "scale(1)",
          transformOrigin,
        }}
      />
    </div>
  );
}
