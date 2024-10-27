'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    { src: "images/11.png", alt: "Chain", label: "Chain" },
    { src: "images/22.png", alt: "Pins", label: "Pins" },
    { src: "images/33.png", alt: "Bangal", label: "Bangal" },
    { src: "images/44.png?height=208&width=540", alt: "Necklace", label: "Necklace" },

]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000) // Auto-advance every 3 seconds
    return () => clearInterval(intervalId)
  }, [nextSlide])

  return (
    <div className="relative w-full max-w-12xl mx-auto overflow-hidden">
      {/* <h2 className="text-2xl font-semibold mb-4 text-center"></h2> */}
      <div className="relative h-[600px] md:h-[1000px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
              {image.label}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


// import React from "react";

// const ImageSlider = (props) => {
//   return (
//     <div id={props.id} className={`carousel slide ${props.className}`} data-bs-ride="carousel">
//       <div className="carousel-inner">{props.children}</div>
//       <a
//         className="carousel-control-prev"
//         href={"#" + props.id}
//         role="button"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href={"#" + props.id}
//         role="button"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default ImageSlider;