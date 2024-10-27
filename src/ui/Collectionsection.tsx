// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import Title from "./Title";
// import { config } from "../../config";
// import { getData } from "../lib";
// import { BlogProps } from "../../type";

// const Blog = () => {
//   const [blogsData, setBlogsData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const endpoint = `${config?.baseUrl}/blogs`;
//       try {
//         const data = await getData(endpoint);
//         setBlogsData(data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <Container>
//       <div className="flex flex-col items-center">
//         <Title text="Shop By Collectios" />
//         <div className="w-full h-[1px] bg-gray-400 mt-3" />
//       </div>
    
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
//         {blogsData?.map((item: BlogProps) => (
//           <div key={item?._id} className="group cursor-pointer">
//             <div className="overflow-hidden">
//               <img
//                 src={item?.image}
//                 alt="blogImage"
//                 className="w-full h-auto object-cover group-hover:scale-110 duration-300"
//               />
//             </div>
//             <div className="mt-5">
//               <p className="text-sm uppercase font-medium text-gray-500">
//                 {item?._base}
//               </p>
//               <p className="text-2xl font-bold line-clamp-1">{item?.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Blog;
// import React from 'react';
// // import './Home.css';

// const CollectionSection: React.FC = () => {
//   return (
//     <>
//       <div id="shop-by-collection">
//         <h1 id="heading">Shop By Collections</h1>
//         <br />
//         <div id="collectionCarousel" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-indicators">
//             <button type="button" data-bs-target="#collectionCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#collectionCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#collectionCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             <button type="button" data-bs-target="#collectionCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src="https://img.freepik.com/premium-photo/beautiful-indian-young-diwali-diyas-clay-lamp-against-blurred-lights-woman-model-with-golden-jewelry-set-ai-generated-photo_868150-77.jpg"
//                 className="d-block w-100"
//                 alt="Slide 1"
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjC8zePCxY3i2Niz0s2s8UJH27BgEl0gO9sA&s"
//                 className="d-block w-100"
//                 alt="Slide 2"
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvne4HVGBqiejmULRIjeW6n8E77-RcrQjeuw&s"
//                 className="d-block w-100"
//                 alt="Slide 3"
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://tiimg.tistatic.com/fp/1/008/532/nri-gold-jewellery-213.jpg"
//                 className="d-block w-100"
//                 alt="Slide 4"
//               />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#collectionCarousel" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#collectionCarousel" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div id="line">
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg=="
//           alt="..."
//         />
//       </div>
//     </>
//   );
// };

// export default CollectionSection;


// 'use client'
import { GrCatalog } from "react-icons/gr";
import { Link } from "react-router-dom";
import  { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// import LinkButton from "./LinkButton";
// import { homeBanner } from "../assets";
// import Container from "./Container";
// import LinkButton from "./LinkButton";
import Title from "./Title";

const images = [
  { src: "images/festival.avif", alt: "festival" },
  // { src: "images/neck.jpeg", alt: "neckband"  },
  // { src: "images/neckband.jpeg", alt: "neckband" },
  { src: "images/necklace.webp", alt: "necklace" },
  { src: "images/arcof.jpeg", alt: "Ring" },
  { src: "images/11.png", alt: "Chain" },
  { src: "images/22.png", alt: "Pins" },
  { src: "images/33.png", alt: "Bangal" },
  { src: "images/44.png?height=208&width=540", alt: "Necklace" },

]

const CollectionSection = () => {
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
    // <Container>
    <div className='py-0 ml-0 rounded-2xl'>
       <div className="flex flex-col items-center mt-2">
         <Title text="Shop By Collection" />
         {/* <div className="w-full h-[1px] bg-gray-400 mt-3" /> */}
       </div>
       <div className="w-full h-[1px] bg-gray-500 mt-5" />
       <div className='py-8 ml-0 rounded-2xl'>

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
         {/* <div>
         <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-20" />
         </div> */}
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
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
       
        <Link to="https://har-nszj.vercel.app/" className="relative block">
             <GrCatalog  className="hover:text-zinc-800 duration-200 text-neutral-500 cursor-pointer h-20 w-20" title="Catalogues" />          
             <h1 className="">Catalogues</h1>
         </Link>
         
      </div>
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-6 h-1 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        {/* <div className="absolute inset-0 flex flex-col justify-center">
        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200" />
       </div> */}
       
       </div>
       
        </div>
       {/* <div className="absolute  flex flex-col justify-center">
        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200" />
       </div> */}
       {/* // </Container> */}
    
     </div>
     <div className='place-items-center h-20 mt-0 mb-5 '>
          <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg==" alt = "..."/>
        </div>
    </div>
    // </Container>
  );
};

export default CollectionSection;