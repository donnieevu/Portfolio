"use client"

import * as React from "react"
import Image from "next/image"
import { ZoomIn } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import { cn } from "@/lib/utils"

interface ImageWithModalProps {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  width?: number
  height?: number
  fill?: boolean
}

export function ImageWithModal({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  fill = false,
}: ImageWithModalProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <div
        className={cn("group relative cursor-pointer overflow-hidden", className)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn className="h-8 w-8 text-white" />
        </div>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 800}
          height={height || 450}
          fill={fill}
          className={cn("transition-transform group-hover:scale-105", imageClassName)}
          unoptimized={true}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="h-auto max-h-[80vh] w-auto"
            style={{ objectFit: "contain" }}
            unoptimized={true}
          />
        </div>
      </Modal>
    </>
  )
}
