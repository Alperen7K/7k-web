"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type BlurImageProps = {
  src: StaticImageData;
  alt: string;
  /** Classes for the outer container (size, aspect-ratio, border, radius). */
  wrapperClassName?: string;
  /** Classes for the image itself (object-fit, hover effects, radius). */
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
};

/**
 * Image with a shimmer skeleton that stays until the file loads, plus
 * Next.js blur-up (works automatically for static imports). The translucent
 * skeleton lets the blurred preview show through while the sheen sweeps,
 * then fades out to reveal the sharp image.
 */
export function BlurImage({
  src,
  alt,
  wrapperClassName,
  className,
  sizes = "(max-width: 640px) 100vw, 50vw",
  quality,
  priority,
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", wrapperClassName)}>
      {/* Shimmer skeleton */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-10 transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder="blur"
        onLoad={() => setLoaded(true)}
        className={cn("object-cover", className)}
      />
    </div>
  );
}
