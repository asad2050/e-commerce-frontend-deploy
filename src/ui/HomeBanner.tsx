'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// import { homeBanner } from "../assets";
// import Container from "./Container";
import LinkButton from "./LinkButton";

const images = [
  { src: "images/festival.avif", alt: "festival" },
  // { src: "images/neck.jpeg", alt: "neckband"  },
  // { src: "images/neckband.jpeg", alt: "neckband" },
  { src: "images/necklace.webp", alt: "necklace"},
  { src: "images/arcof.jpeg", alt: "Ring" },
  { src: "images/11.png", alt: "Chain" },
  { src: "images/22.png", alt: "Pins" },
  { src: "images/33.png", alt: "Bangal" },
  { src: "images/44.png?height=208&width=540", alt: "Necklace" },

]

const HomeBanner = () => {
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
    <div className='py-0 ml-0 rounded-2xl'>
    {/* // <Container className="relative py-5 overflow-hidden"> */}
       <div className="relative w-full max-w-12xl mx-auto overflow-hidden">
      {/* <h2 className="text-2xl font-semibold mb-4 text-center"></h2> */}
      <div className="relative h-[600px] md:h-[600px]">
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
            {/* <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
              {image.label}
            </p> */}
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
            className={`w-6 h-1  ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10">
        
        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
          The new your dream jwellery. </p> 
          <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
          you are wishing for right here.
          </p>
        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
      </div>
    {/* // </Container> */}
    <div className='place-items-center h-20 mt-0 mb-5 '>
          <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg==" alt = "..."/>
        </div>
    </div>
    
  );
};

export default HomeBanner;