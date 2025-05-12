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
      className={`relative cursor-zoom-in ${className}`}
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
          className="absolute top-4 right-4 z-50 bg-black/70 text-white p-2 rounded-full"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Exit fullscreen</span>
        </button>
      )}
    </div>
  );
}
