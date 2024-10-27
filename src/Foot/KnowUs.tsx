// import React from 'react';
import { useNavigate } from 'react-router-dom';

const KnowUs = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col justify-center items-center text-center p-5 max-w-[1300px] mt-5 ml-[115px] mb-5 border border-gray-400 rounded-3xl bg-[#dac8c8]">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl cursor-pointer mb-5"></i>
      <h1 className="text-3xl mb-5">Know Us</h1>
      <p className="text-lg leading-relaxed text-gray-800 mb-4">
        We are a direct-to-consumer (D2C) jewelry brand, backed by a rich family heritage in the jewelry business since 1992. Now, we're embarking on an online venture led by IIT Bombay students.
      </p>
      <p className="text-lg leading-relaxed text-gray-800">
        We are <strong>Artisans of Opulence</strong>, crafting pioneering gold designs with supreme trust, premium service, and blazing speed in the world of luxury—where every opus embodies emotion, sophistication, and revolution.
      </p>
    </div>
  );
};

export default KnowUs;
