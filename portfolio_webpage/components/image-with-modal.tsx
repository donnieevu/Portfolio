"use client";

import * as React from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import ZoomOnHover from "@/components/zoom-on-hover";

interface ImageWithModalProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  rounded?: boolean;
  zoomOnHover?: boolean;
}

export function ImageWithModal({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  fill = false,
  rounded = false,
  zoomOnHover = false,
}: ImageWithModalProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        className={cn(
          "group relative cursor-pointer overflow-hidden",
          rounded ? "rounded-full ring-4 ring-primary/20" : "rounded-md",
          className
        )}
        style={{
          width: rounded ? width || 320 : undefined,
          height: rounded ? height || 320 : undefined,
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100",
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          <ZoomIn className="h-8 w-8 text-white" />
        </div>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 800}
          height={height || 450}
          fill={fill}
          className={cn(
            "transition-transform scale-100 group-hover:scale-105",
            rounded ? "rounded-full" : "rounded-md",
            imageClassName
          )}
          unoptimized={true}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative">
          {zoomOnHover ? (
            <ZoomOnHover src={src} alt={alt} />
          ) : (
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="h-auto max-h-[80vh] w-auto"
              style={{ objectFit: "contain" }}
              unoptimized
            />
          )}
        </div>
      </Modal>
    </>
  );
}
