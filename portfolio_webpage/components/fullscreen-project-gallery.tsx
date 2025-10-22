"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface FullscreenProjectGalleryProps {
  images: GalleryImage[];
  startIndex: number;
}

export default function FullscreenProjectGallery({
  images,
  startIndex,
}: FullscreenProjectGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [index, setIndex] = useState(startIndex);

  const enterFullscreen = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active) setIndex(startIndex);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, [startIndex]);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isFullscreen
          ? "h-screen overflow-auto touch-pan-y overscroll-contain bg-black"
          : ""
      }`}
    >
      <Image
        onClick={enterFullscreen}
        src={images[index].src}
        alt={images[index].alt || ""}
        width={800}
        height={450}
        className="cursor-pointer w-full h-auto rounded-md border object-contain"
      />

      {images[index].caption && (
        <p className="text-sm text-center text-muted-foreground mt-2">
          {images[index].caption}
        </p>
      )}

      {isFullscreen && (
        <>
          {/* Exit Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              exitFullscreen();
            }}
            className="absolute top-4 right-4 z-50 bg-white text-black p-2 rounded-full shadow-lg ring-1 ring-gray-400 hover:bg-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Exit fullscreen</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 rounded-full shadow-lg ring-1 ring-gray-400 hover:bg-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 rounded-full shadow-lg ring-1 ring-gray-400 hover:bg-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
