"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface FullscreenProjectImageProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
}

export default function FullscreenProjectImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: FullscreenProjectImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    if (ref.current?.requestFullscreen) {
      ref.current.requestFullscreen();
    }
  };

  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  // Track fullscreen status
  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`relative cursor-pointer ${className}`}
    >
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={450}
        className={`w-full h-auto rounded-md border object-contain ${imageClassName}`}
      />

      {/* Exit button shown only in fullscreen */}
      {isFullscreen && (
        <button
          onClick={handleExit}
          className="absolute top-4 right-4 z-50 bg-white text-black p-2 rounded-full shadow-lg ring-1 ring-gray-400 hover:bg-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Exit fullscreen</span>
        </button>
      )}
    </div>
  );
}
