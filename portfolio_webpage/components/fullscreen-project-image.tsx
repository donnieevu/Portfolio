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
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    if (imgRef.current?.requestFullscreen) {
      imgRef.current.requestFullscreen();
    }
  };

  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={`select-none touch-pan-y overflow-auto ${
          isFullscreen ? "zoom-container" : ""
        }`}
      >
        <Image
          ref={imgRef}
          onClick={handleClick}
          src={src}
          alt={alt || ""}
          width={800}
          height={450}
          className={`cursor-pointer w-full h-auto rounded-md border object-contain ${imageClassName}`}
        />
      </div>

      {isFullscreen && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleExit();
          }}
          className="absolute top-4 right-4 z-50 bg-white text-black p-2 rounded-full shadow-lg ring-1 ring-gray-400 hover:bg-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Exit fullscreen</span>
        </button>
      )}
    </div>
  );
}
