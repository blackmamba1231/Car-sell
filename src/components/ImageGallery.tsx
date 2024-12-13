"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  "https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-superior-white.jpg",
  "https://www.autovista.in/assets/product_images/gallery/new-wagonR-front.jpg",
  "https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-poolside-blue.jpg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Car view"
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnails - scrollable */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-video w-24 flex-shrink-0 rounded-md overflow-hidden",
              selectedImage === index ? "ring-2 ring-primary" : ""
            )}
          >
            <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
